import axios from "axios";
const DRAMA_API_FIRST_URL = "http://localhost:3000/dramas";


class DramasService {
    // CRUD operation

    getdramas(){
        return axios.get(DRAMA_API_FIRST_URL);
    }

    createdrama(data){
        console.log(data)
        return axios.post(DRAMA_API_FIRST_URL, data);
    }

    
   

    deletedrama(DramaId){

       
        
        return axios.delete(DRAMA_API_FIRST_URL + '/' + DramaId);
    }
}

export default new DramasService()