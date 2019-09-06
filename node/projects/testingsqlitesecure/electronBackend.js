var models = require('./sql/models')
models.sequelize.sync()
module.exports  = {
  callUrl: (data2post, next)=>{
    // switch (data2post.mode) {
    //   case value:

    //     break;

    //   default:
    //     break;
    // }
    models.users.findAll({
      raw:true
    }).then(d=>{
      // console.log(d)
      next(d)
    })
  }
}
