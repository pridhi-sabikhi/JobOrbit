const circle = document.getElementById('circle');
    const images = [
      'https://investin.org/cdn/shop/articles/software-engineering-skills_resize_md.jpg?v=1634293058/id/1011/200/150',
      'https://fsa2-assets.imgix.net/assets/iStock-1338373380.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=1322&ixlib=php-3.3.1&w=1984/id/1021/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-r2KWiIT13YGF2jNZGd6l8uoDgzbNuVCiw&s/id/1031/200/150',
      'https://engineeringonline.ucr.edu/blog/media_1311320627a8ec0abd8b6bd93bba3aa930a933276.jpg?width=2000&format=webply&optimize=medium/id/1041/200/150',
      'https://www.goconstruct.org/media/k0tierrb/civil-engineer-ss2470319003.jpg?width=510&height=332&format=WebP&quality=75&v=1db7ef40c417ce0/id/1051/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vOZEtZesfG_BopbAhTVrXqrK_4SsOWmsgsovYFu-liiGuqqVFP4752USVQEZxRJxT7Q&usqp=CAU/1061/200/150',
      'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*/1071/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7XFXJi-QswalypMgzsiMRmY-ByuEmuxmsw&s/1011/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8djdqMCznMzaYEbza-5MRDvzuiKD71GOGg&s/1021/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGs9ky6ffRg0G_-lN1KZFucfLw5lGkVIe2A&s/1031/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwvj0slxBYjU6Jar9YutXgzV-q_28P4qGzw&s/id/1041/200/150',
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/top-5-high-paying-jobs-in-graphic-design-for-ambitious-minds-25524067-16x9_0.jpeg?VersionId=1tFF.IRHT.3_iZHXa4d0CPcBuHWb4Ifb&size=690:388/1051/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByKD5LCeUSyIpJX6AtKqpUjwaCPl5AhKfkw&s/id/1061/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8SX32Rki7lSMTdXdVfk4Lh7htmTrfP4x_Q&s/id/1071/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgsU2nrI-ZUF0SsEpJhHNggX6cFayQpqQDw&s/id/1011/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6xMtuktfpbUwiTPvJMTD5p1DDopAdUZo98Lc1KEn12cYdL5vbWWLNXlK-bMOxRwBPXY&usqp=CAU/id/1021/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZvFP2PkDD_mt_lSjuuviLhz721PHVwqDqLAoIggegkdaaAmP1F3IKyqMddHq585YyVo&usqp=CAU/id/1031/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvU75MBEN2YDSuACt9sQAmoRSFC-eEi_PAw&s/id/1041/200/150',
      'https://specials-images.forbesimg.com/imageserve/647a633dd2f410d5d10b6f29/Female-professional-leading-team-meeting-with-four-other-professionals-around-a-table/960x0.jpg?fit=scale/id/1071/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6f8anVldSfp4Z57HxL6vY51mLlk5pyVUVRw&s/id/1011/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5yWyXhT97kviFSW3xFidfmvvlfsCxn0f2EmPnUlbrv5TsCLHuIQERcv5O6wxt4yeDb4&usqp=CAU/id/1071/200/150',
      'https://www.cio.com/wp-content/uploads/2025/04/474960-0-18821000-1745215825-shutterstock_259040579.jpg?quality=50&strip=all/id/1081/200/150',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5yWyXhT97kviFSW3xFidfmvvlfsCxn0f2EmPnUlbrv5TsCLHuIQERcv5O6wxt4yeDb4&usqp=CAU/id/1071/200/150'
    ];

    const total = images.length;

    images.forEach((src, idx) => {
      const img = document.createElement('img');
      img.src = src;

      // Spread evenly around circle with delay
      img.style.animationDelay = `${(idx * (4 / total)).toFixed(2)}s`;
      circle.appendChild(img);
    });