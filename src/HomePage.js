import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiData } from "./redux/Data.service";
import { store } from "./redux/store";
import { connect } from "react-redux";
import { getPostDetails } from "./redux/actions"
import "./HomePage.css";

function Home(props) {
    const navigate = useNavigate();

    function DetailsPageData(post) {
        store.dispatch(getPostDetails(post));
        navigate("/detailsPage");
    }

    async function callingApiFromUrl() {
        if (!props.posts?.length) {
            apiData()
        }
    }

    async function myStoreData() {
        let data = await store.getState()
        console.log(data)
    }

    useEffect(() => {
        callingApiFromUrl();
    }, [])
    return (
        <React.Fragment>
            <h1 style={{textAlign: "center" }}>The Notes Lists</h1>
            <div className="row">
                {props.posts?.map((data) => {
                    return (
                        <div class="container col-3" key={data.id} style={{ display: "flex" }}>
                            <div class="card" style={{ margin: "20px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)" }} onClick={() => DetailsPageData(data)}>
                                <div class="slide slide1">
                                    <div class="content">
                                        <div class="icon">
                                            <i class="fa " style={{fontSize:"15px"}} aria-hidden="true">{data.title}</i>
                                        </div>
                                    </div>
                                </div>
                                <div class="slide slide2 " >
                                    <div class="content">
                                        <h1 style={{textAlign: "center"}} >{data.id}</h1>
                                        <p>{data.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )

}
function mapStateToProps(state) {
    return {
        posts: state.posts,
    }
}
export default connect(mapStateToProps)(Home);