exports.demo=(req,res)=>{
    res.send("hello world");
}

exports.create= async (req,res)=>{
    res.send("Create BlogController API");
}
exports.read= async (req,res)=>{
    res.send("Read BlogController API");
}
exports.delete= async (req,res)=>{
    res.send("Delete BlogController API");
}
exports.update= async (req,res)=>{
    res.send("Update BlogController API");
}