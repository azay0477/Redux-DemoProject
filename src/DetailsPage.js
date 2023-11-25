import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { store } from "./redux/store";
import { connect } from "react-redux";
import { getPostDetails, getAllPosts } from "./redux/actions";
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';
import "./DetailsPage.css"


function DetailsPage(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    function editClick() {
        setIsEdit(true);
    }

    function saveClick() {
        const updatedPost = {
            id: props.postDetails.id,
            userId: props.postDetails.userId,
            title: title,
            body: body,
        }
        store.dispatch(getPostDetails(updatedPost));

        const updatedAllPosts = props.allPosts.map((post) => {
            if (post.id === props.postDetails.id) {
                return updatedPost
            } else {
                return post
            }
        })
        console.log(updatedAllPosts)
        store.dispatch(getAllPosts(updatedAllPosts))
        setIsEdit(false);
    }
    async function myStoreData() {
        let data = await store.getState()
        console.log(data)
    }

    function TitleUpdate(e) {
        setTitle(e);
    }

    function BodyUpdate(e) {
        setBody(e);
    }

    const navigate = useNavigate()
    function backToHome() {
        navigate("/home")
    }

    useEffect(() => {
        setBody(props.postDetails?.body)
        setTitle(props.postDetails?.title)
    }, [props])


    function getDetailSection() {
        return (<>
            <div className="editBody"  >
                <Form>
                    <Form.Group className="mb-3 alignment" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title :</Form.Label><br />
                        <Form.Label>{props.postDetails?.title}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3 alignment" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content Details :</Form.Label><br />
                        <Form.Label>{props.postDetails?.body}</Form.Label>
                    </Form.Group>
                </Form>
                <ButtonGroup  >
                    <Button variant="outline-info" style={{ marginLeft: "25px", borderRadius: "10px" }} size="lg" onClick={backToHome}  >Back To HomePage</Button>
                    <Button variant="outline-info" style={{ marginLeft: "75px", borderRadius: "10px" }} size="lg" onClick={editClick} ><div style={{ marginLeft: "50px", marginRight: "50px" }}>Edit</div></Button>
                </ButtonGroup>
            </div>
        </>



        )
    }

    function getDetailEditSection() {
        return (
            <>
                <div className="editBody"  >
                    <Form>
                        <Form.Group className="mb-3 alignment" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" onChange={e => TitleUpdate(e.target.value)} value={title} />
                        </Form.Group>
                        <Form.Group className="mb-3 alignment" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content Details</Form.Label>
                            <Form.Control as="textarea" rows={6} onChange={e => BodyUpdate(e.target.value)} value={body} />
                        </Form.Group>
                        <ButtonGroup >
                            <Button variant="outline-info" style={{ marginLeft: "25px", borderRadius: "10px" }} size="lg" onClick={backToHome}  >Back To HomePage</Button>
                            <Button variant="outline-info" style={{ marginLeft: "75px", borderRadius: "10px" }} size="lg" onClick={saveClick} ><div style={{ marginLeft: "50px", marginRight: "50px" }}>Save</div></Button>
                        </ButtonGroup>
                    </Form>
                </div>
            </>
        )
    }

    return (
        <>
            {isEdit
                ? getDetailEditSection()
                : getDetailSection()
            }

        </>
    )
}
function mapStateToProps(state) {
    return {
        postDetails: state.postDetails,
        allPosts: state.posts
    }
}

export default connect(mapStateToProps)(DetailsPage);


