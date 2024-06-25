const scenarios = {
    "Consigliere": [
        {
            id: "consigliere_1",
            dialogue: "Boss, the Rossi family is muscling in on our casino operations. Do we negotiate a territory split at the old warehouse, or send a message by hitting their shipment at the docks?",
            choices: [
                { text: "Negotiate territory split", effects: { money: -1, family: 2 } },
                { text: "Hit their shipment", effects: { arms: 2, church: -2 } }
            ]
        },
        {
            id: "consigliere_2",
            dialogue: "Our insider at City Hall says there's a vote coming up that could shut down our operations. Do we bribe the councilmen or blackmail the mayor to ensure it goes our way?",
            choices: [
                { text: "Bribe the councilmen", effects: { money: -3, family: 2 } },
                { text: "Blackmail the mayor", effects: { arms: 1, church: -2 } }
            ]
        },
        {
            id: "consigliere_3",
            dialogue: "The annual charity gala is coming up. Do we make a sizeable donation to improve our public image, or use it as a chance to network with corrupt officials?",
            choices: [
                { text: "Make sizeable donation", effects: { money: -2, church: 3 } },
                { text: "Network with officials", effects: { family: 2, church: -1 } }
            ]
        },
        {
            id: "consigliere_4",
            dialogue: "Our mole in the police force says there's a big raid planned. Do we move our operations underground or pay off the police commissioner to call it off?",
            choices: [
                { text: "Move operations", effects: { money: -2, arms: 1 } },
                { text: "Pay off commissioner", effects: { money: -3, family: 2 } }
            ]
        },
        {
            id: "consigliere_5",
            dialogue: "The Colombo family wants to partner on a new venture. Do we join forces to increase our power, or decline to maintain our independence?",
            choices: [
                { text: "Join forces", effects: { family: 3, church: -2 } },
                { text: "Maintain independence", effects: { arms: 1, money: 1 } }
            ]
        }
    ],
    "Enforcer": [
        {
            id: "enforcer_1",
            dialogue: "The new nightclub on 5th isn't paying protection. Do we trash the place to set an example, or offer them a 'discount' to bring them into the fold?",
            choices: [
                { text: "Trash the place", effects: { arms: 2, church: -2 } },
                { text: "Offer a 'discount'", effects: { money: 1, family: 1 } }
            ]
        },
        {
            id: "enforcer_2",
            dialogue: "We caught a rat in our ranks. Do we make him disappear quietly, or make a public example to deter others?",
            choices: [
                { text: "Quiet disappearance", effects: { arms: 1, church: -1 } },
                { text: "Public example", effects: { family: 2, church: -3 } }
            ]
        },
        {
            id: "enforcer_3",
            dialogue: "The Genovese family's pushing drugs in our territory. Do we retaliate with force, or negotiate a cut of their profits?",
            choices: [
                { text: "Retaliate with force", effects: { arms: 3, family: -2 } },
                { text: "Negotiate a cut", effects: { money: 2, church: -1 } }
            ]
        },
        {
            id: "enforcer_4",
            dialogue: "A witness to last month's hit is getting cold feet. Do we silence them permanently, or pay them off to keep quiet?",
            choices: [
                { text: "Silence permanently", effects: { arms: 2, family: -2 } },
                { text: "Pay them off", effects: { money: -2, church: -1 } }
            ]
        },
        {
            id: "enforcer_5",
            dialogue: "Our weapons supplier is raising prices. Do we find a new supplier, or strong-arm them into maintaining our deal?",
            choices: [
                { text: "Find new supplier", effects: { money: -2, arms: 1 } },
                { text: "Strong-arm them", effects: { arms: 2, family: -1 } }
            ]
        }
    ],
    "Informant": [
        {
            id: "informant_1",
            dialogue: "I've got dirt on Judge Morelli's gambling habit. Do we use it to control his rulings, or sell the info to a rival family?",
            choices: [
                { text: "Control his rulings", effects: { family: 2, church: -2 } },
                { text: "Sell to rivals", effects: { money: 3, arms: -1 } }
            ]
        },
        {
            id: "informant_2",
            dialogue: "There's a new detective in town, and he's not on the take. Do we dig up dirt to blackmail him, or offer him a generous 'pension plan'?",
            choices: [
                { text: "Dig up dirt", effects: { arms: 1, church: -2 } },
                { text: "Offer 'pension plan'", effects: { money: -2, family: 1 } }
            ]
        },
        {
            id: "informant_3",
            dialogue: "I've got the schedule for all police patrols this month. Do we use it to plan a big heist, or sell it to other crews for a hefty profit?",
            choices: [
                { text: "Plan a big heist", effects: { arms: 2, money: 3 } },
                { text: "Sell to other crews", effects: { money: 2, family: 1 } }
            ]
        },
        {
            id: "informant_4",
            dialogue: "The DA's building a case against us. Do we plant false evidence to mislead them, or bribe a key witness to recant?",
            choices: [
                { text: "Plant false evidence", effects: { arms: 2, church: -2 } },
                { text: "Bribe key witness", effects: { money: -2, family: 1 } }
            ]
        },
        {
            id: "informant_5",
            dialogue: "I've uncovered a money laundering operation at the local church. Do we blackmail the priest or tip off the feds to gain their favor?",
            choices: [
                { text: "Blackmail the priest", effects: { money: 2, church: -3 } },
                { text: "Tip off the feds", effects: { family: 1, arms: 1 } }
            ]
        }
    ],
    "Capo": [
        {
            id: "capo_1",
            dialogue: "Our bootlegging operation is at risk. Do we bribe the coast guard to look the other way, or invest in better hiding spots for our shipments?",
            choices: [
                { text: "Bribe coast guard", effects: { money: -2, family: 2 } },
                { text: "Invest in hiding spots", effects: { arms: 1, money: -1 } }
            ]
        },
        {
            id: "capo_2",
            dialogue: "We need to expand our territory. Should we take over the docks by force, or negotiate with the current operators for a peaceful transition?",
            choices: [
                { text: "Take over by force", effects: { arms: 2, church: -2 } },
                { text: "Negotiate peacefully", effects: { money: -2, family: 2 } }
            ]
        },
        {
            id: "capo_3",
            dialogue: "Our casino profits are down. Do we rig the games to increase our take, or invest in luxurious renovations to attract high rollers?",
            choices: [
                { text: "Rig the games", effects: { money: 2, church: -2 } },
                { text: "Luxurious renovations", effects: { money: -3, family: 2 } }
            ]
        },
        {
            id: "capo_4",
            dialogue: "We've got a chance to take out a rival family's capo. Do we go for the hit, or use this as leverage to negotiate a truce?",
            choices: [
                { text: "Go for the hit", effects: { arms: 2, family: -2 } },
                { text: "Negotiate a truce", effects: { family: 3, money: -1 } }
            ]
        },
        {
            id: "capo_5",
            dialogue: "The union leaders are demanding a bigger cut. Do we negotiate to keep them happy, or replace them with more cooperative individuals?",
            choices: [
                { text: "Negotiate with leaders", effects: { money: -2, family: 2 } },
                { text: "Replace the leaders", effects: { arms: 1, church: -2 } }
            ]
        }
    ],
    "Politician": [
        {
            id: "politician_1",
            dialogue: "The zoning board is blocking our new development. Should I push through a favorable rezoning bill, or have you 'persuade' the board members?",
            choices: [
                { text: "Push rezoning bill", effects: { money: -2, family: 2 } },
                { text: "'Persuade' board members", effects: { arms: 1, church: -2 } }
            ]
        },
        {
            id: "politician_2",
            dialogue: "Election season is coming up. Do you want me to focus on securing votes in your territories, or expand influence into new areas?",
            choices: [
                { text: "Secure existing votes", effects: { family: 2, money: -1 } },
                { text: "Expand influence", effects: { arms: 1, church: 1 } }
            ]
        },
        {
            id: "politician_3",
            dialogue: "There's a federal investigation looming. Should I use my connections to redirect it, or do you want to handle it your way?",
            choices: [
                { text: "Use connections", effects: { money: -2, family: 2 } },
                { text: "Handle it your way", effects: { arms: 2, church: -2 } }
            ]
        },
        {
            id: "politician_4",
            dialogue: "A new crime bill is up for vote. Do you want me to water it down or push for stricter penalties to hurt our rivals?",
            choices: [
                { text: "Water it down", effects: { money: -2, family: 2 } },
                { text: "Push stricter penalties", effects: { arms: 1, church: 1 } }
            ]
        },
        {
            id: "politician_5",
            dialogue: "The mayor's seat is opening up. Should I run for it myself, or back another candidate who'll be in our pocket?",
            choices: [
                { text: "Run for mayor", effects: { money: -3, family: 3 } },
                { text: "Back another candidate", effects: { money: -2, arms: 1 } }
            ]
        }
    ],
    "Rival Leader": [
        {
            id: "rival_leader_1",
            dialogue: "Your recent moves are threatening our business. We proposing a sit-down to divide territories. You in, or should we settle this the old-fashioned way?",
            choices: [
                { text: "Agree to sit-down", effects: { family: 2, money: -1 } },
                { text: "Settle it old-fashion", effects: { arms: 2, church: -2 } }
            ]
        },
        {
            id: "rival_leader_2",
            dialogue: "We've got a rat problem, and word is they're hiding in your territory. You gonna hand them over, or are we gonna have trouble?",
            choices: [
                { text: "Hand over the rat", effects: { family: 2, church: -2 } },
                { text: "Protect them", effects: { arms: 2, money: -1 } }
            ]
        },
        {
            id: "rival_leader_3",
            dialogue: "The feds are cracking down. I'm proposing a temporary alliance to weather the storm. You in, or you wanna go it alone?",
            choices: [
                { text: "Form temporary alliance", effects: { family: 2, arms: -1 } },
                { text: "Go it alone", effects: { arms: 2, money: -1 } }
            ]
        },
        {
            id: "rival_leader_4",
            dialogue: "We've got a lead on a big score, but we need your connections to pull it off. Wanna partner up, or should we take our business elsewhere?",
            choices: [
                { text: "Partner up", effects: { money: 3, church: -2 } },
                { text: "Decline partnership", effects: { family: 1, arms: 1 } }
            ]
        },
        {
            id: "rival_leader_5",
            dialogue: "Your recent expansion is causing friction. Pull back now, or we'll be forced to retaliate. What's it gonna be?",
            choices: [
                { text: "Pull back", effects: { money: -2, family: 1 } },
                { text: "Stand your ground", effects: { arms: 2, church: -2 } }
            ]
        }
    ],
    "Money Man": [
        {
            id: "money_man_1",
            dialogue: "Boss, we've got a chance to invest in a new offshore account. It's risky but could yield big returns. Should we go for it or stick to our usual channels?",
            choices: [
                { text: "Invest offshore", effects: { money: 3, church: -2 } },
                { text: "Stick to usual channels", effects: { family: 1, arms: 1 } }
            ]
        },
        {
            id: "money_man_2",
            dialogue: "The IRS is sniffing around our legitimate businesses. Do we cook the books to hide our income, or declare some losses to throw them off?",
            choices: [
                { text: "Cook the books", effects: { money: 2, church: -2 } },
                { text: "Declare losses", effects: { money: -2, family: 1 } }
            ]
        },
        {
            id: "money_man_3",
            dialogue: "We've got a chance to buy into a promising tech startup. It could be a great front for laundering. Do we invest heavily or keep our distance?",
            choices: [
                { text: "Invest heavily", effects: { money: -3, family: 2 } },
                { text: "Keep our distance", effects: { arms: 1, church: 1 } }
            ]
        },
        {
            id: "money_man_4",
            dialogue: "Our casino profits are down. Should we adjust the odds to increase our take, or run a high-stakes tournament to attract whales?",
            choices: [
                { text: "Adjust the odds", effects: { money: 2, church: -2 } },
                { text: "Run a tournament", effects: { money: 3, family: -1 } }
            ]
        },
        {
            id: "money_man_5",
            dialogue: "We need to move a large sum quickly. Should we use our art gallery to inflate prices, or funnel it through our construction contracts?",
            choices: [
                { text: "Use art gallery", effects: { money: 2, church: 1 } },
                { text: "Construction contracts", effects: { money: 2, arms: 1 } }
            ]
        }
    ],
    "Family Member": [
        {
            id: "family_member_1",
            dialogue: "Cousin, I want to open a nightclub downtown. It could be great for business, but it might attract unwanted attention. What do you think?",
            choices: [
                { text: "Support the nightclub", effects: { money: 2, church: -1 } },
                { text: "Advise against it", effects: { family: 2, arms: -1 } }
            ]
        },
        {
            id: "family_member_2",
            dialogue: "Uncle Sal's kid got pinched on a drug charge. Do we use our influence to get him off, or let him face the music to teach him a lesson?",
            choices: [
                { text: "Use our influence", effects: { money: -2, family: 2 } },
                { text: "Let him face consequences", effects: { arms: 1, church: 1 } }
            ]
        },
        {
            id: "family_member_3",
            dialogue: "I've been approached by a rival family to betray you. Obviously, I refused, but should we retaliate or use this as an opportunity to plant false info?",
            choices: [
                { text: "Retaliate against rivals", effects: { arms: 2, church: -2 } },
                { text: "Plant false information", effects: { family: 2, money: -1 } }
            ]
        },
        {
            id: "family_member_4",
            dialogue: "The old neighborhood is changing. Should we invest in local businesses to maintain our influence, or start pushing people out to gentrify the area?",
            choices: [
                { text: "Invest in local businesses", effects: { money: -2, family: 3 } },
                { text: "Gentrify the area", effects: { money: 2, church: -2 } }
            ]
        },
        {
            id: "family_member_5",
            dialogue: "I want to run for city council to expand our legitimate influence. Do I have your blessing, or should I stick to our current operations?",
            choices: [
                { text: "Run for city council", effects: { money: -2, church: 2 } },
                { text: "Stick to current operations", effects: { arms: 1, family: 1 } }
            ]
        }
    ],
    "Priest": [
        {
            id: "priest_1",
            dialogue: "My son, the church roof is in desperate need of repair. Would you consider a generous donation, or shall we seek funds elsewhere?",
            choices: [
                { text: "Make a generous donation", effects: { money: -3, church: 3 } },
                { text: "Seek funds elsewhere", effects: { family: -1, church: -1 } }
            ]
        },
        {
            id: "priest_2",
            dialogue: "A parishioner has confessed to witnessing one of your... operations. Should I counsel them to forget what they saw, or do you want to handle this personally?",
            choices: [
                { text: "Counsel to forget", effects: { church: 2, family: 1 } },
                { text: "Handle it personally", effects: { arms: 1, church: -2 } }
            ]
        },
        {
            id: "priest_3",
            dialogue: "The bishop is visiting next month. Do we spruce up the church to impress him, or use this opportunity to... discuss certain arrangements?",
            choices: [
                { text: "Spruce up the church", effects: { money: -2, church: 2 } },
                { text: "Discuss arrangements", effects: { family: 2, church: -1 } }
            ]
        },
        {
            id: "priest_4",
            dialogue: "Our youth program is struggling. Should we invest in new facilities, or perhaps you could provide some... alternative activities for the young ones?",
            choices: [
                { text: "Invest in new facilities", effects: { money: -2, church: 3 } },
                { text: "Provide 'alternative activities'", effects: { arms: 1, church: -2 } }
            ]
        },
        {
            id: "priest_5",
            dialogue: "A rival family is trying to gain influence in the parish. Should we accept their donations, or do you want me to subtly turn them away?",
            choices: [
                { text: "Accept their donations", effects: { money: 2, family: -2 } },
                { text: "Turn them away", effects: { family: 2, church: 1 } }
            ]
        }
    ],
    "Dirty Cop": [
        {
            id: "dirty_cop_1",
            dialogue: "Got a tip about a raid on one of your warehouses tonight. Want me to redirect the squad, or let it happen and arrest some low-level guys to keep my cover?",
            choices: [
                { text: "Redirect the squad", effects: { money: -2, family: 2 } },
                { text: "Let it happen", effects: { arms: -1, church: 1 } }
            ]
        },
        {
            id: "dirty_cop_2",
            dialogue: "Internal Affairs is sniffing around. I can throw them off our scent, but it'll cost you. Or should I play it straight for a while?",
            choices: [
                { text: "Pay to throw them off", effects: { money: -3, family: 2 } },
                { text: "Play it straight", effects: { arms: -1, church: 1 } }
            ]
        },
        {
            id: "dirty_cop_3",
            dialogue: "Got a chance to plant evidence on a rival family. Could take down one of their key players. You want me to do it, or is it too risky?",
            choices: [
                { text: "Plant the evidence", effects: { arms: 2, church: -2 } },
                { text: "Too risky, pass", effects: { family: 1, money: 1 } }
            ]
        },
        {
            id: "dirty_cop_4",
            dialogue: "There's a new hotshot detective in town, not on anybody's payroll. Should I bring him into our circle, or do you want him transferred out?",
            choices: [
                { text: "Bring him in", effects: { money: -2, family: 2 } },
                { text: "Transfer him out", effects: { arms: 1, church: -1 } }
            ]
        },
        {
            id: "dirty_cop_5",
            dialogue: "Got wind of a big shipment coming in for you. I can ensure a clear route, but it'll mean calling in a lot of favors. Or you can take your chances.",
            choices: [
                { text: "Ensure clear route", effects: { money: -2, arms: 2 } },
                { text: "Take our chances", effects: { family: -1, money: 2 } }
            ]
        }
    ],
    "Nun": [
        {
            id: "nun_1",
            dialogue: "The orphanage is running low on supplies. Could you arrange a donation, or should we seek help from the community?",
            choices: [
                { text: "Arrange a donation", effects: { money: -2, church: 3 } },
                { text: "Seek community help", effects: { family: 1, church: 1 } }
            ]
        },
        {
            id: "nun_2",
            dialogue: "I've overheard some... unsavory plans in confession. Should I keep this to myself, or do you need to know the details?",
            choices: [
                { text: "Keep it to yourself", effects: { church: 2, arms: -1 } },
                { text: "Share the details", effects: { family: 2, church: -2 } }
            ]
        },
        {
            id: "nun_3",
            dialogue: "The soup kitchen is attracting some unsavory characters. Should we increase security, or perhaps you could... discourage their presence?",
            choices: [
                { text: "Increase security", effects: { money: -1, church: 2 } },
                { text: "Discourage their presence", effects: { arms: 1, church: -1 } }
            ]
        },
        {
            id: "nun_4",
            dialogue: "We need to raise funds for a new wing in the hospital. Would you prefer to host a charity gala, or perhaps make a private contribution?",
            choices: [
                { text: "Host a charity gala", effects: { money: -2, family: 2 } },
                { text: "Make a private contribution", effects: { money: -3, church: 3 } }
            ]
        },
        {
            id: "nun_5",
            dialogue: "One of the girls in our care has a talent for numbers. Should we encourage her towards a convent life, or maybe you have use for her skills?",
            choices: [
                { text: "Encourage convent life", effects: { church: 2, family: -1 } },
                { text: "Utilize her skills", effects: { money: 2, church: -2 } }
            ]
        }
    ],
    "Business Owner": [
        {
            id: "business_owner_1",
            dialogue: "We've got a line on some 'gently used' luxury cars. We could flip them quick through the shop. What's the play?",
            choices: [
                { text: "Go for it, maximize profits", effects: { money: 2, arms: -1, church: -1 } },
                { text: "Pass, too risky", effects: { money: -1, family: 1, church: 1 } }
            ]
        },
        {
            id: "business_owner_2",
            dialogue: "The new shopping mall is killing our street's business. We could 'persuade' them to relocate, or adapt our stores. Your call, Don.",
            choices: [
                { text: "Use force to drive them out", effects: { arms: 2, money: 1, church: -2 } },
                { text: "Modernize our businesses", effects: { money: -2, family: 1, church: 1 } }
            ]
        },
        {
            id: "business_owner_3",
            dialogue: "A health inspector's sniffing around one of our cafés. Seems he knows too much about our backroom operations. What should we do?",
            choices: [
                { text: "Bribe him to look the other way", effects: { money: -2, arms: 1 } },
                { text: "Threaten him and his family", effects: { arms: 2, church: -1, family: -1 } }
            ]
        },
        {
            id: "business_owner_4",
            dialogue: "I've got an idea to expand our 'parts acquisition' business. We could start boosting cars ourselves instead of just fencing them. Riskier, but more profitable.",
            choices: [
                { text: "Expand into car theft", effects: { money: 3, arms: 1, church: -2 } },
                { text: "Stick to fencing, it's safer", effects: { money: 1, family: 1 } }
            ]
        },
        {
            id: "business_owner_5",
            dialogue: "A chain store wants to buy out our businesses on the street. It's a good offer, but we'd lose our fronts. What's the move, Boss?",
            choices: [
                { text: "Sell and reinvest elsewhere", effects: { money: 3, arms: -1, family: -1 } },
                { text: "Refuse and maintain our territory", effects: { money: -1, family: 2, arms: 1 } }
            ]
        }
    ]
};

const storylineEvents = {
    "BankHeist": [
        {
            id: "bank_heist_start",
            dialogue: "An opportunity to rob the First National Bank has come up. This could be a big score, but it's extremely risky. What do you want to do?",
            choices: [
                { text: "Plan the heist", nextId: "bank_heist_plan" },
                { text: "Ignore the opportunity", nextId: "bank_heist_ignore" }
            ]
        },
        {
            id: "bank_heist_ignore",
            dialogue: "You decide to pass on the bank heist. It's too risky for now.",
            choices: [
                { text: "Focus on other business", effects: { money: -1, church: 1 }, outcome: "You avoid the heat from a high-profile heist and focus on safer ventures. Your legitimate businesses thrive." },
                { text: "Reconsider the heist", nextId: "bank_heist_plan" }
            ]
        },
        {
            id: "bank_heist_plan",
            dialogue: "You gather your crew. Do you want to go in guns blazing or try a stealthy approach?",
            choices: [
                { text: "Guns blazing", nextId: "bank_heist_loud" },
                { text: "Stealthy approach", nextId: "bank_heist_stealth" }
            ]
        },
        {
            id: "bank_heist_loud",
            dialogue: "The alarm goes off! The police are on their way. What's your next move?",
            choices: [
                { text: "Fight your way out", nextId: "bank_heist_shootout" },
                { text: "Try to negotiate", nextId: "bank_heist_negotiate" }
            ]
        },
        {
            id: "bank_heist_stealth",
            dialogue: "You've made it to the vault undetected, but the security system is more complex than expected. What do you do?",
            choices: [
                { text: "Take your time cracking it", nextId: "bank_heist_success" },
                { text: "Abort the mission", nextId: "bank_heist_abort" }
            ]
        },
        {
            id: "bank_heist_shootout",
            dialogue: "The situation has escalated into a full-blown shootout with the police. Your options are limited.",
            choices: [
                { text: "Surrender", effects: { arms: -4, money: -3, family: -2 }, outcome: "You're forced to surrender. The failed heist is a major blow to your organization's strength and finances." },
                { text: "Fight to the end", nextId: "bank_heist_casualties" }
            ]
        },
        {
            id: "bank_heist_negotiate",
            dialogue: "You've managed to take hostages and open a line of communication with the police. What's your demand?",
            choices: [
                { text: "Safe passage out of the city", nextId: "bank_heist_escape" },
                { text: "Hold out for more time", nextId: "bank_heist_stealth_escape" }
            ]
        },
        {
            id: "bank_heist_success",
            dialogue: "You've cracked the vault and secured a massive loot. Time to make your escape!",
            choices: [
                { text: "Exit through the sewers", effects: { money: 5, arms: -2, achievement: "🏦" }, outcome: "You successfully escaped through the sewers with the loot, evading the police but losing some firepower in the process." },
                { text: "Disguise as bank employees", effects: { money: 5, family: -2, achievement: "🏦" }, outcome: "Your disguise worked perfectly, allowing you to walk out with the money, but some family members were caught in the process." }
            ]
        },
        {
            id: "bank_heist_abort",
            dialogue: "You decide to cut your losses and abort the heist. Smart move or missed opportunity?",
            choices: [
                { text: "Regroup and plan another heist", effects: { arms: 1, money: -1 }, outcome: "You managed to escape without losses. The experience has made your crew more prepared for future operations." },
                { text: "Lay low for a while", effects: { family: 1, church: -1 }, outcome: "You avoid any heat from the attempted heist. Your cautious approach improves your standing with the family and the community." }
            ]
        },
        {
            id: "bank_heist_casualties",
            dialogue: "The shootout was brutal. You've lost some of your best men, but managed to escape with some of the money.",
            choices: [
                { text: "Distribute money to families", effects: { money: 2, family: 2, arms: -2, achievement: "🏦" }, outcome: "Your generosity to the fallen members' families increases loyalty, but your organization is significantly weakened." },
                { text: "Keep it all for the organization", effects: { money: 3, family: -2, arms: 1, achievement: "🏦" }, outcome: "Your cold decision ensures that your organization retains its strength, but at the cost of family loyalty." }
            ]
        },
        {
            id: "bank_heist_escape",
            dialogue: "You've successfully negotiated your escape. Now you need to decide what to do with the hostages.",
            choices: [
                { text: "Release them unharmed", effects: { money: 2, church: 1, arms: -1, achievement: "🏦" }, outcome: "Your merciful act improves your public image, but you had to leave some weapons behind to secure your escape." },
                { text: "Use them as human shields", effects: { money: 2, church: -2, arms: 1, achievement: "🏦" }, outcome: "You escape successfully with all the loot and weapons, but at the cost of your public image." }
            ]
        },
        {
            id: "bank_heist_helicopter",
            dialogue: "You're in the helicopter with the loot, but it's being pursued by police choppers. What's your move?",
            choices: [
                { text: "Try to outmaneuver them", effects: { money: 3, arms: -1, family: -2, achievement: "🏦" }, outcome: "After a thrilling chase, you manage to escape with most of the money, but lose some men and equipment in the process." },
                { text: "Threaten to drop money on the city", effects: { money: 3, church: 1, family: -1, achievement: "🏦" }, outcome: "Your threat works. You escape with some of the money and gain public support, but your family questions your tactics." }
            ]
        }
    ],
    "MysteriousEncounter": [
        {
            id: "bar_meeting",
            dialogue: "A stunningly beautiful woman at the bar catches your eye. She smiles and offers to buy you a drink. What do you do?",
            choices: [
                { text: "Accept the drink", nextId: "casual_conversation" },
                { text: "Politely decline", nextId: "leave_bar" }
            ]
        },
        {
            id: "leave_bar",
            dialogue: "You politely decline and decide to leave the bar. Something doesn't feel right.",
            choices: [
                { text: "Head home safely", effects: { family: 1, church: 1 }, outcome: "Your instincts served you well. You avoided a potentially dangerous situation." },
                { text: "Have second thoughts", nextId: "casual_conversation" }
            ]
        },
        {
            id: "casual_conversation",
            dialogue: "You accept the drink and engage in casual conversation. The woman is charming, but something seems off. Do you:",
            choices: [
                { text: "Keep drinking and talking", nextId: "getting_tipsy" },
                { text: "Make an excuse to leave", nextId: "leave_bar" }
            ]
        },
        {
            id: "getting_tipsy",
            dialogue: "The drinks keep coming, and you're feeling tipsy. The conversation isn't really going anywhere, but the woman insists on another round. What's your move?",
            choices: [
                { text: "Continue drinking", nextId: "very_drunk" },
                { text: "Try to end the night", nextId: "attempt_leave" }
            ]
        },
        {
            id: "attempt_leave",
            dialogue: "You try to leave, but you're unsteady on your feet. The woman offers to help you to a taxi.",
            choices: [
                { text: "Accept her help", nextId: "potential_danger" },
                { text: "Insist on leaving alone", nextId: "safe_escape" }
            ]
        },
        {
            id: "safe_escape",
            dialogue: "You manage to leave alone, despite your drunken state. It's a close call, but you make it home safely.",
            choices: [
                { text: "Sleep it off", effects: { money: -1, family: -1, church: -1 }, outcome: "You wake up with a terrible hangover, but relieved to be safe. That was a close call." }
            ]
        },
        {
            id: "very_drunk",
            dialogue: "Yur vishion is blury, and the room is spining. The womans words are slurred, or is that jus you? She says sumthin about going somewhere else. Wut do you do?",
            choices: [
                { text: "Go with hr", nextId: "potential_danger" },
                { text: "Try to leve", nextId: "drunk_escape_attempt" }
            ]
        },
        {
            id: "drunk_escape_attempt",
            dialogue: "You stumble to ur feet, the room tiltng wildly. Gotta get out... but which way is the door? Evrything's so confusing...",
            choices: [
                { text: "Fumble towards da lite", nextId: "safe_escape" },
                { text: "Ask da woman fer help", nextId: "potential_danger" }
            ]
        },
        {
            id: "potential_danger",
            dialogue: "You hazily realize you're in a car... or is it a van? Unfamiliar voices... Where are they taking you? Your head is pounding...",
            choices: [
                { text: "Try to jump out", nextId: "desperate_escape" },
                { text: "Pretend to be passed out", nextId: "kidnapped" }
            ]
        },
        {
            id: "desperate_escape",
            dialogue: "Adrenaline surges through you. In a moment of clarity, you see a chance to escape. It's risky, but it might be your only option.",
            choices: [
                { text: "Take the risk", effects: { arms: -2, money: -2 }, outcome: "You manage to escape, but not without injury. You'll need time to recover from this ordeal." },
                { text: "It's too dangerous", nextId: "kidnapped" }
            ]
        },
        {
            id: "kidnapped",
            dialogue: "You wake up in a dark room, head pounding. A voice says they've captured the great Don. They demand a ransom or threaten to kill you. What's your move?",
            choices: [
                { text: "Negotiate", nextId: "ransom_negotiation" },
                { text: "Attempt escape", nextId: "escape_attempt" }
            ]
        },
        {
            id: "ransom_negotiation",
            dialogue: "You try to negotiate, but your captors seem determined. They want a significant portion of your assets. What do you do?",
            choices: [
                { text: "Agree to their terms", effects: { money: -4, family: -2 }, outcome: "You're released, but at a great cost. Your family questions your judgment." },
                { text: "Refuse and threaten them", nextId: "final_standoff" }
            ]
        },
        {
            id: "escape_attempt",
            dialogue: "You spot a potential way out, but it's risky. Guards are nearby. Do you take the chance?",
            choices: [
                { text: "Make a break for it", nextId: "daring_escape" },
                { text: "Wait for a better opportunity", nextId: "final_standoff" }
            ]
        },
        {
            id: "daring_escape",
            dialogue: "Your heart races as you make your move. It's all or nothing now.",
            choices: [
                { text: "Fight your way out", effects: { arms: -2, money: -1, family: 2 }, outcome: "Against all odds, you manage to escape. Your family's respect for you grows after hearing of your daring escape." },
                { text: "Stealth escape", effects: { money: -2, arms: 1 }, outcome: "You slip away unnoticed. This experience has sharpened your survival instincts." }
            ]
        },
        {
            id: "final_standoff",
            dialogue: "Your captors are losing patience. They give you one last chance to comply or face the consequences. What's your final decision?",
            choices: [
                { text: "Call their bluff", nextId: "game_over_kidnapped" },
                { text: "Offer double or nothing", effects: { money: -5, arms: 2 }, outcome: "Your bold move pays off. You're released and gain valuable intel on your enemies." }
            ]
        },
        {
            id: "game_over_kidnapped",
            dialogue: "Your defiance seals your fate. The kidnapping ends tragically, and your reign as the Don comes to an abrupt end.",
            choices: [
                { text: "Accept your fate", effects: { game_over: true }, outcome: "Your empire crumbles in your absence. The reign of the great Don is over." }
            ]
        }
    ]
    // Add any additional storylines here
};

export { scenarios, storylineEvents };
