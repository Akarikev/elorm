const roasts = [
  "I'd explain it to you, but I left my crayons at home.",
  "You're the reason the gene pool needs a lifeguard.",
  "If ignorance is bliss, you must be the happiest person on the planet.",
  "You're not stupid; you just have bad luck thinking.",
  "I don't have the time or the crayons to explain this to you.",
  "You're a gray sprinkle on a rainbow cupcake.",
  "Your secrets are always safe with me. I never even listen when you tell me them.",
  "I'd agree with you, but then we'd both be wrong.",
  "You're proof that even God makes mistakes sometimes.",
  "You're not pretty enough to have such an ugly personality.",
  "You bring everyone so much joy when you leave the room.",
  "You have the right to remain silent because whatever you say will probably be stupid anyway.",
  "I thought of you today. It reminded me to take out the trash.",
  "You have an entire life to be an idiot. Why not take today off?",
  "Your face makes onions cry.",
  "You're like a cloud. When you disappear, it's a beautiful day.",
  "I'd like to see things from your point of view, but I can't seem to get my head that far up my ass.",
  "You're so fake, Barbie is jealous.",
  "I envy people who haven't met you.",
  "You bring everyone so much joy... when you leave the room.",
  "You're like a software update. Whenever I see you, I think, 'Not now.'",
  "You're the human equivalent of a participation trophy.",
  "You're so dense, light bends around you.",
  "You have the right to remain silent, but you lack the capacity.",
  "I'm not insulting you; I'm describing you.",
  "You are proof that evolution can go in reverse.",
  "You're as useless as the 'ueue' in 'queue'.",
  "I would ask how old you are, but I know you can't count that high.",
  "You're a few fries short of a Happy Meal.",
  "You're like a candle in the wind - utterly pointless.",
  "Your only purpose in life is as a cautionary tale.",
  "You're the reason they put instructions on shampoo.",
  "You're not the dumbest person on the planet, but you sure better hope they don't die.",
  "You're the reason we can't have nice things.",
  "You are depriving some village of its idiot.",
  "I would agree with you, but then we’d both be wrong.",
  "I guess if you actually ever spoke your mind, you'd really be speechless.",
  "You're the reason I prefer animals over people.",
  "You are the human version of period cramps.",
  "You're like a square peg in a round hole – useless.",
  "I’d slap you, but that would be animal abuse.",
  "You have the charisma of a damp rag.",
  "You're about as useful as a screen door on a submarine.",
  "I'd love to stay and chat, but you're a total waste of time.",
  "You bring everyone so much joy when you leave the room.",
  "I'd agree with you but then we'd both be wrong.",
  "You're like a software update. Whenever I see you, I think, 'Not now.'",
  "You're the reason the gene pool needs a lifeguard.",
  "I don't have the time or the crayons to explain this to you.",
  "You're a gray sprinkle on a rainbow cupcake.",
  "Your secrets are always safe with me. I never even listen when you tell me them.",
  "I'd agree with you, but then we'd both be wrong.",
  "You're proof that even God makes mistakes sometimes.",
  "You're not pretty enough to have such an ugly personality.",
  "You bring everyone so much joy when you leave the room.",
  "You have the right to remain silent because whatever you say will probably be stupid anyway.",
  "I thought of you today. It reminded me to take out the trash.",
  "You have an entire life to be an idiot. Why not take today off?",
  "Your face makes onions cry.",
  "You're like a cloud. When you disappear, it's a beautiful day.",
  "I'd like to see things from your point of view, but I can't seem to get my head that far up my ass.",
  "You're so fake, Barbie is jealous.",
  "I envy people who haven't met you.",
  "You bring everyone so much joy... when you leave the room.",
  "You're like a software update. Whenever I see you, I think, 'Not now.'",
  "You're the human equivalent of a participation trophy.",
  "You're so dense, light bends around you.",
  "You have the right to remain silent, but you lack the capacity.",
  "I'm not insulting you; I'm describing you.",
  "You are proof that evolution can go in reverse.",
  "You're as useless as the 'ueue' in 'queue'.",
  "I would ask how old you are, but I know you can't count that high.",
  "You're a few fries short of a Happy Meal.",
  "You're like a candle in the wind - utterly pointless.",
  "Your only purpose in life is as a cautionary tale.",
  "You're the reason they put instructions on shampoo.",
  "You're not the dumbest person on the planet, but you sure better hope they don't die.",
  "You're the reason we can't have nice things.",
  "You are depriving some village of its idiot.",
  "I would agree with you, but then we’d both be wrong.",
  "I guess if you actually ever spoke your mind, you'd really be speechless.",
  "You're the reason I prefer animals over people.",
  "You are the human version of period cramps.",
  "You're like a square peg in a round hole – useless.",
  "I’d slap you, but that would be animal abuse.",
  "You have the charisma of a damp rag.",
  "You're about as useful as a screen door on a submarine.",
  "I'd love to stay and chat, but you're a total waste of time.",
  "You're so bright, you could light up a whole room... with your ego.",
  "I'm not saying you're old, but I heard your birth certificate is in hieroglyphics.",
  "You're so smart, you make me feel like I'm in a room full of Einsteins... or maybe just one Einstein.",
  "Do you have a map? I keep getting lost in your eyes... because they're so beady.",
  "Your jokes are so bad, they're good... like a trainwreck that I can't look away from.",
  "You're so strong, you could lift a car... with your ego.",
  "I'm not saying you're lazy, but I've seen snails move faster... on valium.",
  "Your fashion sense is so unique, it's like you raided a thrift store... and put everything on at once.",
  "You're so charming, you could talk your way out of a paper bag... or into one.",
  "Your cooking is so bad, it's like you're trying to poison me... with love.",
  "You're so beautiful, you made me forget my pickup line... and my name.",
  "I'm not saying you're short, but I've seen Legos taller than you.",
  "Your dancing is so bad, it's like you're having a seizure... and I'm not sure if I should call 911.",
  "You're so funny, you make me laugh... like a clown at a children's birthday party.",
  "Your singing is so bad, it's like you're strangling a cat... and I'm not sure if I should call the ASPCA.",
  "You're so smart, you make me feel like I'm in a room full of kindergartners... and I'm the teacher.",
  "Your jokes are so old, they're like my grandfather's... and he's dead.",
  "You're so strong, you could lift a feather... with your pinky.",
  "I'm not saying you're slow, but I've seen turtles move faster... on ice.",
  "Your fashion sense is so bad, it's like you dressed yourself... blindfolded.",
  "You're so charming, you could talk your way into a coma... and I'm not sure if I should call 911.",
  "Your cooking is so good, it's like you're trying to poison me... with love... and a side of arsenic.",
  "You're so beautiful, you made me forget my name... and my address... and my social security number.",
  "I'm not saying you're old, but I heard your birth certificate is in ancient Sumerian.",
  "Your dancing is so good, it's like you're having a seizure... and I'm not sure if I should call 911... or a choreographer.",
  "You're so funny, you make me laugh... like a hyena... on nitrous oxide.",
  "Your singing is so good, it's like you're strangling a cat... and I'm not sure if I should call the ASPCA... or a record label.",
  "You're so smart, you make me feel like I'm in a room full of rocket scientists... and I'm the janitor.",
  "Your jokes are so new, they're like my newborn baby... and I'm not sure if I should call the pediatrician.",
  "You're so strong, you could lift a skyscraper... with your pinky... and a crane.",
  "I'm not saying you're fast, but I've seen cheetahs move slower... on valium.",
  "Your fashion sense is so good, it's like you dressed yourself... with the help of a stylist... and a mirror.",
  "You're so charming, you could talk your way into a royal wedding... and I'm not sure if I should call the Queen.",
  "Your cooking is so bad, it's like you're trying to poison me... with hate... and a side of cyanide.",
  "You're so beautiful, you made me forget my phone number... and my email address... and my social media passwords.",
  "You're as sharp as a marble.",
  "I'd agree with you but then we'd both be wrong.",
  "You bring everyone so much joy when you leave the room.",
  "You have an entire life to be an idiot. Why not take today off?",
  "Your secrets are always safe with me. I never even listen when you tell me them.",
  "You are proof that even God makes mistakes sometimes.",
  "I thought of you today. It reminded me to take out the trash.",
  "You're like a cloud. When you disappear, it's a beautiful day.",
  "You're the reason we can't have nice things.",
  "You are depriving some village of its idiot.",
  "You're like a software update. Whenever I see you, I think, 'Not now.'",
  "I'd explain it to you, but I left my crayons at home.",
  "You're the reason the gene pool needs a lifeguard.",
  "If ignorance is bliss, you must be the happiest person on the planet.",
  "You're not stupid; you just have bad luck thinking.",
  "You're a gray sprinkle on a rainbow cupcake.",
  "I'd like to see things from your point of view, but I can't seem to get my head that far up my ass.",
  "You're so fake, Barbie is jealous.",
  "I envy people who haven't met you.",
  "You're the human equivalent of a participation trophy.",
  "You're so dense, light bends around you.",
  "You have the right to remain silent, but you lack the capacity.",
  "I'm not insulting you; I'm describing you.",
  "You are proof that evolution can go in reverse.",
  "You're as useless as the 'ueue' in 'queue'.",
  "I would ask how old you are, but I know you can't count that high.",
  "You're a few fries short of a Happy Meal.",
  "You're like a candle in the wind - utterly pointless.",
  "Your only purpose in life is as a cautionary tale.",
  "You're the reason they put instructions on shampoo.",
  "You're not the dumbest person on the planet, but you sure better hope they don't die.",
  "You're the reason I prefer animals over people.",
  "You are the human version of period cramps.",
  "You're like a square peg in a round hole – useless.",
  "I’d slap you, but that would be animal abuse.",
  "You have the charisma of a damp rag.",
  "You're about as useful as a screen door on a submarine.",
  "I'd love to stay and chat, but you're a total waste of time.",
  "Your face makes onions cry.",
  "You're as useful as a chocolate teapot.",
  "You're like a dictionary – you add meaning to my life.",
  "If I wanted to hear from an idiot, I’d just ask you to speak.",
  "You're not ugly; you're just less pleasing to look at.",
  "Your brain's so minute, it fits neatly on the edge of a pin.",
  "I'd try to see things from your perspective, but I just can't get my head that far up my own ass.",
  "You're living proof that even trash can have a purpose.",
  "You're like a broken pencil – pointless.",
  "I'd give you a nasty look, but you've already got one.",
  "You're like a software update. Whenever I see you, I think, 'Not now.'",
  "You're a gray sprinkle on a rainbow cupcake.",
  "You're the reason the gene pool needs a lifeguard.",
  "If laughter is the best medicine, your face must be curing the world.",
];

export default roasts;
