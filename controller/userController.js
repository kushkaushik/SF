const mongoose  = require('mongoose')
const CREW = mongoose.model("managment_system")

const now = Date()
console.log(now.toLocaleString())

const postData = (req,res) =>{
    const {Title , Details } = req.body;
    if(!Title || !Details){
      return  res.status(404).json({
            success:false,
            msg:"please fill all the fields"
        })
    }
    else{
        CREW.findOne({Title}).then(data=>{
            if(data){
                return res.status(401).json({
                    success:false,
                    msg:"Duplicate Entry"
                })
            }
            else{
                const dataSaver = new CREW({
                    Title,Details,Date:now.toLocaleString(),Length:CREW.length
                })
                dataSaver.save().then(mydata=>{
                    return res.status(200).json({
                        success:true,
                        msg:"Saved Successfully",
                        mydata
                    })
                })
            }
        })
    }

}

const getData = (req,res) =>{
    CREW.find().sort({Title:1}).then(getData=>{
        return res.status(201).json({
            success:true,
            data:getData
        })
    })
}

const updateData = async(req,res) =>{
    const Id = req.params._id

    const tp = now.toLocaleString()

    const data = await CREW.findByIdAndUpdate(Id,{
        Title:req.body?.Title,
        Details:req.body?.Details,
        Date:tp,
        

    })
        if(!data) return res.status(301).json({success:true,msg:"Something Wrong"})
        res.status(201).json({success:true,data});
    
}

const deleteData = (req,res) =>{
    CREW.findByIdAndRemove(req.params._id).then(mydata=>{
        if(!mydata){
            return res.status(404).json({
                success:false,
                msg:"not found"
            })
        }
        return res.status(200).json({
            success:true,
            msg:"delete Successfully"
        })
    })
}

const getDataOne = (req,res)=>{
    CREW.findById(req.params._id).then(data=>{
        if(!data){
            return res.status(404).json({
                success:false,
                msg:"not found"
            })
        }
        return res.status(200).json({
            success:true,
            data
        })
    })
}

module.exports = {postData,getData,updateData,deleteData,getDataOne}