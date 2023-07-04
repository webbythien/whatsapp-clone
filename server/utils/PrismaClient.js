import{ PrismaClient} from '@prisma/client'

let prismaInstance=null;

//theo cách phổ thông sẽ dùng model tạo bảng dùng hàm bên moongoose tạo  truy vấn bằng cách gọi model
//prisma thì phải tạo prisma client để tạo truy vấn
function getPrismaInstance(){
  if(!prismaInstance){
    prismaInstance=new PrismaClient()
  }
  return prismaInstance
}

export default getPrismaInstance