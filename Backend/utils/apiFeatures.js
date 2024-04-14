class ApiFeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString;
    }
    search(){
        if(this.queryString.title){
            const queryObj={...this.queryString}; 
            this.query=this.query.find({title: { $regex: queryObj.title, $options: 'i'}});
            return this;
        }
        else{
            const queryObj={...this.queryString};
            let queryStr = JSON.stringify(queryObj)
            queryStr= queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
            this.query=this.query.find(JSON.parse(queryStr));
            return this;
        }
    }
}

module.exports=ApiFeatures;