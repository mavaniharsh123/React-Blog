import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [bollywood, setBollywood] = useState([
    {
      Title: "Producer Manish Shah calls Kartik Aaryan extremely unprofessional",
      CategoryName: 'Bollywood',
      PublishedDate: 'Dec 28 2021',
      ImageAsset: 'https://filmfare.wwmindia.com/content/2022/jan/kartikaaryan41643097395.jpg',
      BlogContent:
        "Producer Manish Shah revealed that Kartik Aaryan had warned that he will walk out from his upcoming movie Shehzada if the Hindi dubbed version of the original film Ala Vaikunthapurramuloo was released in theatres.",
      Likes: '500',
    },
    {
      Title: 'Parineeti Chopra on being groomed by the best filmmakers in Bollywood',
      CategoryName: 'Bollywood',
      PublishedDate: 'Jan 20 2022',
      ImageAsset: 'https://filmfare.wwmindia.com/content/2022/jan/parineetichopra41642677720.jpg',
      BlogContent:
        'Parineeti Chopra has always shown that she is not afraid to walk the path less travelled. Parineeti has been one of the most unconventional actors in the Hindi film industry, given her brave choice of films and characters during her decade in Hindi cinema.',
      Likes: '501',
    },
    {
      Title: 'Katrina Kaif celebrates one month of wedded bliss with Vicky Kaushal',
      CategoryName: 'Bollywood',
      PublishedDate: 'Jan 9 2022',
      ImageAsset: 'https://filmfare.wwmindia.com/content/2022/jan/katrinakaifvickykaushal41641712617.jpg',
      BlogContent:
        'It’s been one month since the much talked about Vicky Kaushal and Katrina Kaif wedding and the actress has taken to Instagram to share her thoughts on the same. Katrina Kaif posted an adorable picture with Vicky Kaushal on her Instagram feed today and captioned it “Happppyyyy one month my heart loving“.',
      Likes: '502',
    },
    {
      Title: 'Lata Mangeshkar tests positive for COVID-19, admitted to a hospital',
      CategoryName: 'Bollywood',
      PublishedDate: 'Jan 11 2022',
      ImageAsset: 'https://filmfare.wwmindia.com/content/2022/jan/latamangeshkar41641885952.jpg',
      BlogContent:
        "Lata Mangeshkar has tested positive for COVID-19 and has been admitted to Mumbai's renowned Breach Candy Hospital in Mumbai. The songstress is 92-years-old. As of now, not much is known of her condition and further details are awaited.",
      Likes: '503',
    },
    {
      Title: 'Sidharth Malhotra receives a special message from rumoured girlfriend Kiara Advani on his birthday',
      CategoryName: 'Bollywood',
      PublishedDate: 'Jan 17 2022',
      ImageAsset: 'https://filmfare.wwmindia.com/content/2022/jan/kiaraadvani41642404272.jpg',
      BlogContent:
        'Kiara and Sidharth are rumoured to be dating. Though they have not confirmed their relationship, the two often visit each other and also hang out together. Sidharth and Kiara also spent their new year in Ranthambore but didn’t share pictures of them together.',
      Likes: '504',
    },
  ]);

  const [technology, setTechnology] = useState([
    {
      Title: 'Xiaomi Redmi 10A and Redmi 10C tipped to launch in India soon',
      CategoryName: 'Technology',
      PublishedDate: 'Jan 25 2022',
      ImageAsset: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/Redmi_9.jpg?hRTAsEc2a.F9wN.t22vyUBLlgEroV7ER&size=770:433',
      BlogContent:
        "Xiaomi is soon expected to launch Redmi 10A and Redmi 10C. Last year, the brand didn’t unveil any entry-level smartphones and focused mostly on mid-range and premium offerings. Now, it is expected to launch new devices under Redmi A and Redmi C series. According to a report by Xiaomiui, the company has plans to bring these devices to India, China, and other global markets.",
      Likes: '500',
    },
    {
      Title: 'Google reportedly never stops sharing your location, even if you turn off location sharing',
      CategoryName: 'Technology',
      PublishedDate: 'Jan 25 2022',
      ImageAsset: 'https://w7.pngwing.com/pngs/200/830/png-transparent-google-map-logo-google-maps-navigation-location-text-logo-sign.png',
      BlogContent:
        'Google has been accused of sharing users locations despite users turning off location sharing. A new lawsuit has been filed against Google by four attorneys general of three US states and led by District of Columbia Attorney General Karl A. Racine (D). The lawsuit has alleged that Google has deceived consumers about how their location is tracked and used by the company and consumers’ ability to protect their privacy by stopping the tracking.',
      Likes: '501',
    },
    {
      Title: ' Flying car wins airworthiness certification',
      CategoryName: 'Technology',
      PublishedDate: 'Jan 20 2022',
      ImageAsset: 'https://c.files.bbci.co.uk/9942/production/_119143293_flying-car.jpg',
      BlogContent:
        "A flying car capable of hitting speeds over 100mph (160kmh) and altitudes above 8,000ft (2,500m) has been issued with a certificate of airworthiness by the Slovak Transport Authority.",
      Likes: '502',
    },
    {
      Title: "Largest Artificial Intelligence Supercomputer Is Zuckerberg's New Boast",
      CategoryName: 'Technology',
      PublishedDate: 'Jan 15 2022',
      ImageAsset: 'https://c.ndtvimg.com/2021-10/fv7inbjg_mark-zuckerberg-650_625x300_29_October_21.jpg',
      BlogContent:
        "Facebook's parent company Meta announced on Monday it was launching one of the world's most powerful supercomputers to boost its capacity to process data, despite persistent disputes over privacy and disinformation.",
      Likes: '503',
    },
    {
      Title: "Google's Pixel 6a Smartphone Might Launch in May",
      CategoryName: 'Technology',
      PublishedDate: 'Jan 22 2021',
      ImageAsset: 'https://m.media-amazon.com/images/I/71ee+5V4ZRL._SL1500_.jpg',
      BlogContent:
        'Google Pixel 6 price in India is expected to be Rs. 44,990. Google Pixel 6 Expected to be launched on Jan 31, 2022. This is 8 GB RAM / 128 GB internal storage base variant of Google Pixel 6 which is expected to available in Stormy Black, Kinda Coral, Sorta Seafoam colour.',
      Likes: '504',
    },
  ]);

  const [hollywood, setHollywood] = useState([
    {
      Title: 'James Cameron confirms that filming of Avatar 2 is complete',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 27 2021',
      ImageAsset: 'https://filmfare.wwmindia.com/content/2020/sep/thumbnail-james-cameron1601222926.jpg',
      BlogContent:
        'One of the biggest films in world cinema, James Cameron’s Avatar changed the face of movies and introduced the world to flawless VFX. It has a massive fan base around the globe who all have been eagerly waiting for the second instalment of the blockbuster. ',
      Likes: '500',
    },
    {
      Title: 'Instagram post hints Tobey will return as Spider-Man in Doctor Strange sequel',
      CategoryName: 'Hollywood',
      PublishedDate: 'Jan 25 2022',
      ImageAsset: 'https://images.hindustantimes.com/img/2022/01/25/550x309/Tobey_1643100174365_1643100199998.jpg',
      BlogContent:
        'The Marvel Cinematic Universe introduced the concept of multiverse in its recent Phase 4 of films and series, showing variants of the same characters existing in other universes.',
      Likes: '501',
    },
    {
      Title: 'Halle Berry Stuns In Plunging Top &Admits She Was Drunk When ShePretended To Marry Van Hunt',
      CategoryName: 'Hollywood',
      PublishedDate: 'Jan 27 2022',
      ImageAsset: 'https://hollywoodlife.com/wp-content/uploads/2022/01/halle-berry-plunging-shirt-jimmy-fallon-van-hunt-embed1.jpg',
      BlogContent:
        'Halle Berry has been on a roll promoting her new movie, Moonfall, which hits theaters on Feb. 4, and her latest look while on The Tonight Show Starring Jimmy Fallon was fabulous. The actress called in virtually to the show when she opted to wear a completely sheer, plunging black blouse.',
      Likes: '502',
    },
    {
      Title: "Jeremy Slater roped in to write 'Mortal Kombat'",
      CategoryName: 'Hollywood',
      PublishedDate: 'Jan 27 2022',
      ImageAsset: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/8igcqvbrns9svbu3_1643286269.jpeg',
      BlogContent:
        'Mortal Kombat 2 has officially been greenlit by Warner Bros, the popular video game franchise was rebooted in 2021 after the critical and commercial failure of the 1997 film Mortal Kombat: Annihilation. Mortal Kombat was released last year and premiered in theatres and on HBO Max at the same time.',
      Likes: '503',
    },
    {
      Title: "Jake Gyllenhaal to lead heist thriller 'Cut and Run'",
      CategoryName: 'Hollywood',
      PublishedDate: 'Jan 26 2022',
      ImageAsset: 'https://deadline.com/wp-content/uploads/2022/01/AP21311625616634-e1643148980675.jpg',
      BlogContent:
        'New Republic Pictures has won the rights to John Glenn’s spec Cut and Run in a bidding war, with Jake Gyllenhaal (The Guilty) coming aboard to produce and star, Deadline has confirmed.',
      Likes: '504',
    },
  ]);

  const [fitness, setFitness] = useState([
    {
      Title: 'Six easy yoga poses to boost fertility, relieve constipation and stress',
      CategoryName: 'Fitness',
      PublishedDate: 'Jan 23 2022',
      ImageAsset: 'https://images.indianexpress.com/2022/01/wall-yoga_1200_getty.jpg',
      BlogContent:
        'Unwinding after a long day of work and household chores should be top priority. While sleeping is one of the best ways to relax the mind and body, it is equally important to take care of each and every muscle that help to relieve health issues like constipation, stress, and also improve posture. This is where yoga asanas can play a major role, especially in the long-term.',
      Likes: '500',
    },
    {
      Title: "Why you shouldn’t skip warm-ups before workout",
      CategoryName: 'Fitness',
      PublishedDate: 'Jan 15 2022',
      ImageAsset: 'https://images.indianexpress.com/2021/12/GettyImages-fitness-jumping-rope-1200-1.jpg',
      BlogContent:
        'As such, mixing up exercises is good for the mind and body, say experts, to not hit a plateau or get bored of your workouts. But there’s one aspect that should remain constant — a good warm up. A lot of people are guilty of jumping right into their workouts without mobilising and warming up their muscles, risking injuries.',
      Likes: '501',
    },
    {
      Title: '5 tips to actually make your keto diet work',
      CategoryName: 'Fitness',
      PublishedDate: 'Jan 04 2022',
      ImageAsset: 'data:image/jpeg;base64,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',
      BlogContent:
        'A favourite among people trying to lose weight is the ketogenic diet which limits the intake of carbohydrates and concentrates on increasing intake of fats (mostly) and proteins. Like with all kinds of diet, the results begin to show only after a few months of diligent practice of the diet. It is mostly during this time that people often lose steam and begin cheating their diet.',
      Likes: '502',
    },
    {
      Title: 'Made New Year weight loss resolutions? Know what you can realistically achieve',
      CategoryName: 'Fitness',
      PublishedDate: 'Jan 05 2022',
      ImageAsset: 'https://images.indianexpress.com/2021/10/weight-loss_200getty.jpg',
      BlogContent:
        'After festive eating during New Year celebrations comes weight loss resolutions. People give in to weight loss fads, crash diets, detoxes and more to reach their goals. This year, before you set yourself up for your New Year weight loss resolution, know how much is realistically possible to lose, why all weight loss isn’t necessarily fat loss, and why healthy and realistic weight loss is a slow and long journey.',
      Likes: '503',
    },
    {
      Title: 'Nutritionist shares the one key habit to lose or gain weight',
      CategoryName: 'Fitness',
      PublishedDate: 'Jan 03 2022',
      ImageAsset: 'https://images.indianexpress.com/2021/07/legs-2635038_1280.jpg',
      BlogContent:
        'Everyone wishes to achieve their fitness goals, but to do that, one needs to be regular with their efforts. Agreed nutritionist Nancy Dehra and said that “if you are trying to lose weight/gain weight or improve your health markers, you need to create a habit; a habit of consistency.',
      Likes: '504',
    },
  ]);

  const [food, setFood] = useState([
    {
      Title: 'Delhi man makes ice cream rolls with dhokla and khandvi in viral video. Pathetic, says Internet',
      CategoryName: 'Food',
      PublishedDate: 'Jan 10 2022',
      ImageAsset: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/BeFunky-collage_-_2022-01-25T0.jpg?UG_zKQquH0qNBhhNDj0PiEyWDJy0yd4g&size=770:433',
      BlogContent:
        'Dhokla - Dhokla is a traditional fermented food, which is a Gujarati dish. It is made from gram dal or besan. Before making it, the yeast is also picked up in it and then it is made. Eating it also strengthens immunity.',
      Likes: '500',
    },
    {
      Title: "Here’s the perfect recipe for ‘2 ingredient dough pizza’",
      CategoryName: 'Food',
      PublishedDate: 'Jan 10 2022',
      ImageAsset: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Q3H54gmLGjVBmothO1mGVaKdUG_JIggbAg&usqp=CAU',
      BlogContent:
        'Pizzas are an emotion; they can fix any bad day. The dish, which is originally from Italy, is extremely popular in India with many brands, home chefs and cafes serving up their version of Neapolitan or New York-style preparations.',
      Likes: '501',
    },
    {
      Title: 'The Back Burner: Surti Locho is a tasty, healthy breakfast',
      CategoryName: 'Food',
      PublishedDate: 'Jan 20 2022',
      ImageAsset: 'https://images.indianexpress.com/2020/07/SurtiLocho_TheBackBurner_PoojaPillai759.jpg',
      BlogContent:
        "To me, locho also embodies the ‘Anything Goes’ attitude that underpins street food cultures around the world, a firm rebuke to those who insist on authenticity in food. Of course, authenticity has its place — especially when it comes to recognising and celebrating food cultures that have typically been marginalised — but to insist on it at any cost is to take joy and creativity out of food and cooking.",
      Likes: '502',
    },
    {
      Title: "Lohri 2022 Food Recipes: From Sarso Ka Saag, Punjabi Dishes for 'Lohri ki Thaali'",
      CategoryName: 'Food',
      PublishedDate: 'Jan 12 2022',
      ImageAsset: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ifBiLcX3S_4Ybj1R-eLu-X3kcem1z8BGFA&usqp=CAU',
      BlogContent:
        'Peppery, pungent and deeply nutritious, Punjabi Sarson ka Saag (or sarson da saag) is a favorite during the cold North Indian winters, especially when paired with Makki Ki Roti. Making this authentic dish is not hard, but it does take some time. Once you taste how vibrantly creamy and delicious it is, you won’t mind the work!',
      Likes: '503',
    },
    {
      Title: 'Misal Pav',
      CategoryName: 'Food',
      PublishedDate: 'Dec 27 2021',
      ImageAsset: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDyTPmIrzaF28zgktL6YYKsCwukKR12ERkA&usqp=CAU',
      BlogContent:
        'Misal pav is a popular Maharashtrian street food of usal (sprouts curry) topped with onions, tomatoes, farsan (fried savory mixture), lemon juice, coriander leaves and served with a side of soft pav (Indian dinner rolls). The sprouts curry is made from moth bean sprouts. This misal recipe is a tasty and filling vegan dish that can be served as breakfast, lunch or brunch. The word “Misal” here is for the sprouts curry and Pav are Indian dinner rolls. Actually, in the Marathi language, the word misal means mixture. This sprouts curry is also called as usal.',
      Likes: '504',
    },
  ]);

  return (
    <BlogContext.Provider
      value={{
        value1: [bollywood, setBollywood],
        value2: [hollywood, setHollywood],
        value3: [technology, setTechnology],
        value4: [fitness, setFitness],
        value5: [food, setFood],
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
