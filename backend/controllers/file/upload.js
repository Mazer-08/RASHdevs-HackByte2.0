import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dz8vltggj', 
  api_key: '396817672689825', 
  api_secret: 'ozDCfwOoP5F1JWQ6_R78nYIwth4' 
});

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });