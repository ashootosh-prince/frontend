const backendDomin = "http://localhost:8080"

const SummaryApi = {
    signUP : {
        url:`${backendDomin}/api/signup`,
        method: "post"
    },
    signIn : {
        url: `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user : {
        url: `${backendDomin}/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get'
    },
    uploadProduct : {
        url : `${backendDomin}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backendDomin}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${backendDomin}/api/update-product`,
        method  : 'post'
    },
    productDetails : {
        url : `${backendDomin}/api/product-details`,
        method : 'post'
    },
}

export default SummaryApi
