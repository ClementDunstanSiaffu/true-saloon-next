import {servi} from '../../../store';


export default (req,res) =>{
    res.status(200).json(servi)
}