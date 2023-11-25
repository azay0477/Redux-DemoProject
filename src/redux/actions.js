
export function getAllPosts (PostData){
    const postAction = {
        type : "posts",
        payload : PostData
    } 
     return postAction
}


export function getPostDetails (PostData){
    const postAction = {
        type : "postDetails",
        payload : PostData
    } 
     return postAction
}