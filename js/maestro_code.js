function myFunction(){
var lines = ["Are you a magician? Because whenever I look at you, everyone else disappears!",
"Are you an interior decorator? Because when I saw you, the entire room became beautiful.",
"Are you religious? Because you're the answer to all my prayers.",
"Did you sit on a pile of sugar? Cause you have a pretty sweet ass.",
"Do you have a Band-Aid? Because I just scraped my knee falling for you.",
"There's 21 letters in the alphabet. [<i>No. There's 26.</i>] Oh darn... I must have forgotten U R A Q T.",
"Do you know what my shirt is made of? Boyfriend material.",
"If you were a vegetable you'd be a cute-cumber.",
"I seem to have lost my phone number. Can I have yours?",
"Do you have a map? I'm getting lost in your eyes.",
"I don't have a library card, but do you mind if I check you out?",
"I was feeling a little off today, but you definitely turned me on.",
"Are you a fruit, because Honeydew you know how fine you look right now?",
"Do you live in a corn field, cause I'm stalking you.",
"Are you a parking ticket? 'Cause you've got fine written all over you.",
"Can I have directions? [<i>To where?</i>] To your heart.",
"I was so enchanted by your beauty that I ran into that wall over there. So I'm going to need your name and number for insurance purposes.",
"Are you a banana? Because you are a-peeling.",
"Is there an airport nearby or is that just my heart taking off?",
"My doctor says I'm lacking Vitamin U.",
"Have you been to the doctor lately? Cause I think you're lacking some Vitamin Me.",
"Can I follow you home? Cause my parents always told me to follow my dreams.",
"You look so familiar. Didn't we take a class together? I could've sworn we had chemistry.",
"I thought happiness started with an H. Why does mine start with U?",
"Do you work at Starbucks? Because I like you a latte.",
"You know I'd like to invite you over, but I'm afraid you're so hot that you'll skyrocket my air-conditioning bill.",
"If you were a booger I'd pick you first.",
"If I were to ask you out on a date, would your answer be the same as the answer to this question?",
"Are you lost ma'am? Because heaven is a long way from here.",
"Are you a campfire? Cause you are hot and I want s'more.",
"My love for you is like diarrhea, I just can't hold it in.",
"I like Legos, you like Legos, why don't we build a relationship?",
"Rejection can lead to emotional stress for both parties involved and emotional stress can lead to physical complications such as headaches, ulcers, cancerous tumors, and even death! So for my health and yours, JUST SAY YES!",
"Did you fart, cause you blew me away.",
"Do you believe in love at first sight, or should I walk by again?",
"Are you my phone charger? Because without you, I'd die.",,
"You're like a dictionary, you add meaning to my life!",
"How much does a polar bear weigh? [<i>How much?</i>] Enough to break the ice... Hi, I'm (insert name here).",
"You're single. I'm single. Coincidence? I think not."];
var element = document.getElementById("header");
var number = Math.floor((Math.random() * lines.length));
var pickUpLine = lines[number];
element.innerHTML = lines[number];
var phone = document.getElementById("phone").value;
console.log(phone);
maestro.Twilio.sendSms(phone, pickUpLine);
console.log(number)
  };

//alert(number);
//alert("Your text is being sent to " + "")
