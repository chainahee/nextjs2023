export default function handler(req, res) {
    res.status(201).send("Hi there");
    //   if (req.method !== "POST") {
    //     res.status(405).send({ msg: "Only POST request are allowed." });
  
    //     return;
    //   }
  
    //   const {post} = req.body
  
    //   try {
    //     await connectMongo()
    //     Post.create({post}).then((data) => {
    //         console.log(data);
    //         res.status(201).send(data)
    // })
    //   } catch(err) {
    //     console.log(err);
    //     res.status(400).send({err: "Something wrong."})
    //   }
  }