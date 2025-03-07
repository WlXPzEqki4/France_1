import { NetworkNode, NetworkLink, TimelineEvent, RelationshipDimension, TabData, KeyContact } from "../types";

// Main data structure for the UAE-France Relations content
export interface SectionData {
  id: string;
  title: string;
  content: ContentBlock[];
  graphData?: {
    nodes: NetworkNode[];
    links: NetworkLink[];
  };
  timeline?: TimelineEvent[];
  relationshipDimensions?: RelationshipDimension[];
  tabs?: TabData[];  
}



export type ContentBlock = {
  type: "paragraph" | "heading" | "subheading" | "list" | "image" | "quote" | "paragraph_html";
  content: string;
  items?: string[]; // For list type
  imageUrl?: string; // For image type
  imageCaption?: string; // For image type
  author?: string; // For quote type
};

// Main sections data
export const relationsSections: SectionData[] = [
  {
    id: "intro",
    title: "UAE–France Relations (2019–2024)",
    content: [
      {
        type: "paragraph",
        content: "This interactive analysis explores the multifaceted relationship between the United Arab Emirates and France from 2019 to 2024, examining diplomatic ties, economic cooperation, points of alignment and tension, and key stakeholders in both nations."
      },
      {
        type: "paragraph",
        content: "Navigate through the sections below to explore different aspects of this bilateral relationship."
      }
    ]
  },
  {
    id: "political-diplomatic",
    title: "Political and Diplomatic Ties",
    content: [
      {
        type: "paragraph",
        content: "UAE–France political relations have grown since 2019, marked by frequent high-level visits and a deepening strategic partnership. This regular dialogue culminated in June 2020 with both countries adopting a 10-year roadmap (2020–2030) to guide their strategic partnership."
      },
      {
        type: "paragraph",
        content: "Despite the global pandemic, leaders maintained contact, emphasizing the resilience of diplomatic ties. The relationship reached new heights in late 2021 when President Macron visited the UAE."
      },
      {
        type: "paragraph",
        content: "In January 2022, when Abu Dhabi suffered a Houthi missile/drone attack, France visibly stood by the UAE by activating the 1995 defense accord – deploying Rafale jets to reinforce UAE air defenses. This swift support, at a time when other allies were slower, was warmly noted in Abu Dhabi. Shortly after, in May 2022, President Macron traveled to Abu Dhabi to pay respects upon the passing of H.H. President Sheikh Khalifa bin Zayed, reaffirming solidarity during the UAE’s leadership transition."
      },
      {
        type: "paragraph",
        content: "High-level dialogue continued through 2023 and 2024: the two sides held strategic dialogues to review progress and launch new initiatives. For example, they jointly supported major events like India’s G20 presidency and the UAE’s hosting of COP28, and even formed a trilateral cooperation with India on Indo-Pacific issues in early 2023. Throughout this period, both countries navigated any policy differences quietly and constructively, ensuring that the overall diplomatic trajectory remained positive."
      },
      {
        type: "paragraph",
        content: "The consistent cadence of official visits and consultations attests to a mature relationship, with regular policy alignment on regional stability and a shared vision for a “third way” in global affairs balancing great-power competition"
      }
    ],
    timeline: [
      {
        year: "June 2020",
        title: "Strategic Partnership Roadmap Signing",
        description: "Signing of the UAE–France Strategic Partnership Roadmap (2020–2030), enhancing cooperation across defence, energy, culture, and technology.",
        type: "positive"
      },
      {
        year: "December 2021",
        title: "Macron's UAE Visit and Rafale Deal",
        description: "President Emmanuel Macron visits UAE; historic €16 billion deal signed for 80 Rafale jets.",
        type: "positive"
      },
      {
        year: "January 2022",
        title: "French Military Support After Houthi Attacks",
        description: "France activates mutual defence pact following Houthi attacks on Abu Dhabi; deploys Rafale jets to bolster UAE air defences.",
        type: "positive"
      },
      {
        year: "May 2022",
        title: "Macron's Condolence Visit",
        description: "President Macron visits Abu Dhabi for condolences on passing of Sheikh Khalifa; reaffirms support during UAE leadership transition.",
        type: "positive"
      },
      {
        year: "July 2022",
        title: "President MBZ's First State Visit to France",
        description: "First state visit to France by H.H. Sheikh Mohamed bin Zayed Al Nahyan as UAE President; significant energy, defence, and cultural agreements signed.",
        type: "positive"
      },
      {
        year: "February 2023",
        title: "Indo-Pacific Trilateral Initiative Launch",
        description: "France, UAE, and India launch trilateral cooperation on Indo-Pacific security.",
        type: "positive"
      },
      {
        year: "December 2023",
        title: "COP28 Cooperation",
        description: "President Macron attends COP28 in Dubai, reaffirming strong bilateral alignment on global climate action.",
        type: "positive"
      }
    ],
    relationshipDimensions: [
      {
        name: "Diplomatic Relations",
        value: 75,
        description: "Overall strong with occasional tensions over specific issues"
      },
      {
        name: "Parliamentary Cooperation",
        value: 85,
        description: "Active exchange between legislative bodies"
      },
      {
        name: "Cultural Understanding",
        value: 65,
        description: "Generally positive with some sensitivity areas"
      },
      {
        name: "Conflict Mediation",
        value: 70,
        description: "Complementary approaches to regional stability"
      }
    ],
    graphData: {
      nodes: [
        { id: "uae_mofa", label: "UAE Ministry of Foreign Affairs", group: "uae", size: 25 },
        { id: "sweden_mofa", label: "Swedish Ministry for Foreign Affairs", group: "sweden", size: 25 },
        { id: "uae_embassy", label: "UAE Embassy in Stockholm", group: "uae", size: 20 },
        { id: "sweden_embassy", label: "Swedish Embassy in Abu Dhabi", group: "sweden", size: 20 },
        { id: "un_forum", label: "United Nations", group: "neutral", size: 22 },
        { id: "eu_council", label: "European Council", group: "sweden", size: 18 },
        { id: "gcc", label: "Gulf Cooperation Council", group: "uae", size: 18 }
      ],
      links: [
        { source: "uae_mofa", target: "sweden_mofa", value: 5 },
        { source: "uae_mofa", target: "uae_embassy", value: 4 },
        { source: "sweden_mofa", target: "sweden_embassy", value: 4 },
        { source: "uae_embassy", target: "sweden_mofa", value: 3 },
        { source: "sweden_embassy", target: "uae_mofa", value: 3 },
        { source: "uae_mofa", target: "un_forum", value: 2 },
        { source: "sweden_mofa", target: "un_forum", value: 2 },
        { source: "sweden_mofa", target: "eu_council", value: 3 },
        { source: "uae_mofa", target: "gcc", value: 3 },
        { source: "un_forum", target: "eu_council", value: 1 },
        { source: "un_forum", target: "gcc", value: 1 }
      ]
    }
  },
  {
    id: "economic-trade",
    title: "Economic and Trade Relations",
    content: [
      {
        type: "paragraph",
        content: "Economic ties between the UAE and France are robust and characterized by significant trade and cross-investment. Non-oil bilateral trade reached $7.5 billion in 2019, reflecting a return to growth after several years of decline. France exports a wide range of goods to the UAE valued around €3.3 billion in 2019, making the UAE France’s second-largest export market in the region. Top French exports include machinery and capital equipment, chemicals, luxury goods and agri-food products. In turn, French imports from the UAE (about €1.5 billion) are dominated by hydrocarbons, reflecting the UAE’s role as a reliable oil supplier."
      },
      {
        type: "paragraph",
        content: "Over 600 French companies operate in the UAE, in sectors ranging from energy and infrastructure to retail and hospitality."
      },
      {
        type: "paragraph",
        content: "On the investment side, the UAE is among the top Gulf investors in France, with cumulative UAE investment flows of roughly $173 million into France (2016–2020) and French FDI into the UAE about $3.1 billion in the same period. Key investment sectors include energy (oil, gas and renewables), transportation, aerospace, luxury goods, and technology. Notably, 207 French companies had invested in the UAE by 2019, while around 21 UAE-based companies invested in France, highlighting a growing two-way confidence."
      }
    ],




    timeline: [
      {
        year: "2019-2023",
        title: "Bilateral Trade Volume (2019-2023)",
        description: "Annual bilateral non-oil trade: Approximately €7.5 billion (average, 2019–2023)",
        type: "positive"
      },
      {
        year: "",
        title: "Key Export Sectors",
        description: "France exports luxury goods, aircraft, machinery, pharmaceuticals, and agricultural products; UAE exports hydrocarbons, aluminum, and petrochemicals.",
        type: "positive"
      },
      {
        year: "",
        title: "French Corporate Presence in UAE",
        description: "Over 600 French companies operate in UAE, notably TotalEnergies, Carrefour, Airbus, Thales, and ENGIE.",
        type: "positive"
      },
      {
        year: "",
        title: "UAE Investment Portfolio in France",
        description: "Significant UAE investments in France: real estate (e.g., Altais Towers), technology, infrastructure, and renewable energy sectors.",
        type: "positive"
      },
      {
        year: "July 2022",
        title: "Comprehensive Strategic Energy Partnership ",
        description: "UAE–France Comprehensive Strategic Energy Partnership launched to boost cooperation in hydrogen, renewables, nuclear energy.",
        type: "positive"
      },
      {
        year: "July 2022",
        title: "Business Council Establishment",
        description: "Establishment of UAE–France Business Council (chaired by TotalEnergies CEO Patrick Pouyanné) to facilitate investment and business collaboration.",
        type: "positive"
      },
      {
        year: "May 2023",
        title: "ADNOC-TotalEnergies LNG Agreement",
        description: "ADNOC Gas and TotalEnergies sign three-year LNG supply agreement valued at approx. €1 billion.",
        type: "positive"
      },
    ],










    relationshipDimensions: [
      {
        name: "Trade Volume",
        value: 90,
        description: "Sharp rise of over 40% in recent years"
      },
      {
        name: "Swedish Business Presence",
        value: 85,
        description: "Over 200 Swedish companies active in the UAE"
      },
      {
        name: "UAE Investment in Sweden",
        value: 65,
        description: "Growing investment in Swedish technology and innovation"
      },
      {
        name: "Joint Projects",
        value: 80,
        description: "Collaboration in infrastructure, technology, and sustainability"
      }
    ],
    graphData: {
      nodes: [
        { id: "uae_economy", label: "UAE Ministry of Economy", group: "uae", size: 25 },
        { id: "sweden_trade", label: "Swedish Ministry of Trade", group: "sweden", size: 25 },
        { id: "business_sweden", label: "Business Sweden", group: "sweden", size: 22 },
        { id: "uae_chamber", label: "UAE Chambers of Commerce", group: "uae", size: 22 },
        { id: "tech_sector", label: "Technology Sector", group: "neutral", size: 20 },
        { id: "energy_sector", label: "Energy Sector", group: "neutral", size: 20 },
        { id: "defense_sector", label: "Defense Sector", group: "neutral", size: 18 },
        { id: "innovation_hub", label: "Innovation Hubs", group: "neutral", size: 15 }
      ],
      links: [
        { source: "uae_economy", target: "sweden_trade", value: 5 },
        { source: "business_sweden", target: "uae_chamber", value: 4 },
        { source: "uae_economy", target: "tech_sector", value: 4 },
        { source: "sweden_trade", target: "tech_sector", value: 4 },
        { source: "uae_economy", target: "energy_sector", value: 3 },
        { source: "sweden_trade", target: "energy_sector", value: 3 },
        { source: "uae_economy", target: "defense_sector", value: 3 },
        { source: "sweden_trade", target: "defense_sector", value: 3 },
        { source: "business_sweden", target: "innovation_hub", value: 2 },
        { source: "uae_chamber", target: "innovation_hub", value: 2 },
        { source: "tech_sector", target: "innovation_hub", value: 2 },
        { source: "energy_sector", target: "innovation_hub", value: 1 }
      ]
    }
  },
  {
    id: "cooperation",
    title: "Areas of Cooperation",
    content: [
      {
        type: "paragraph",
        content: "Defense cooperation is the cornerstone of UAE–France relations, providing strategic benefits to both sides. A formal defense agreement has existed since 1995, and France operates a permanent military base in Abu Dhabi (established 2009) that includes an air, naval, and land component.  This makes the UAE host to France’s only military base in the Gulf, enabling French forces to project power and respond to crises in the Middle East and Africa. Joint military exercises and intelligence sharing are routine."
      },
      {
        type: "paragraph",
        content: "France, which has led counter-terror operations in the Sahel and Levant, finds a reliable partner in the UAE – indeed Abu Dhabi provided support for France’s mission in Mali and the fight against ISIS. This solidarity enhances security for both countries. The procurement side of defense cooperation (e.g. fighter jets, naval assets) also dovetails with strategic goals – it diversifies the UAE’s defense arsenal with high-end French technology while bolstering France’s defense industry. In February 2023, France, the UAE, and India launched a trilateral initiative, including joint military drills and naval coordination in the Indian Ocean."
      },
      {
        type: "paragraph",
        content: "Energy has long been a vital area of collaboration, now expanding into clean energy and climate action. The UAE has been a key oil supplier to France, and French companies such as Total have large stakes in UAE oil concessions and gas projects. Building on this, the two countries formed a Comprehensive Strategic Energy Partnership (CSEP) in 2022 to coordinate on traditional and renewable energy."
      },
      {
        type: "paragraph",
        content: "Cultural diplomacy is a flagship of the UAE–France partnership, symbolized by the Louvre Abu Dhabi. This pioneering museum – opened in 2017 under a 30-year UAE–France agreement – has become the most visited museum in the Middle East."
      },
      {
        type: "paragraph",
        content: "Both governments have prioritized cooperation in advanced industries and innovation. A bilateral Strategic Dialogue mechanism (held annually) tracks progress in areas like artificial intelligence, cybersecurity, space exploration, food security, and health. Space is a particularly exciting frontier – France’s space agency (CNES) and the UAE Space Agency/Mohammed bin Rashid Space Centre have partnered on missions and signed agreements for lunar exploration and Earth observation in 2022 They are expanding a joint Space Cooperation Sub-Committee to include startups and private companies, aiming to use space data to tackle climate change and encourage industry collaboration."
      }
    ],
    tabs: [
      {
        id: "innovation",
        label: "Defence & Security",
        content: [
          {
            type: "paragraph",
            content: "The UAE-France defence relationship forms the cornerstone of their strategic partnership, providing mutual security benefits and regional stability."
          },
          {
            type: "list",
            content: "Key developments include:",
            items: [
              "Ongoing since 2009: Permanent French military base in Abu Dhabi supporting regional stability.",
              "2021–2024: Intensified joint military exercises, including air force and naval drills.",
              "2022: France provides immediate military support after Houthi missile attacks"
            ]
          }
        ]
      },
      {
        id: "sustainability",
        label: "Energy & Sustainability",
        content: [
          {
            type: "paragraph",
            content: "Energy cooperation between the UAE and France has evolved from traditional oil trade to a comprehensive partnership encompassing renewable and sustainable initiatives."
          },
          {
            type: "list",
            content: "Notable achievements include:",
            items: [
              "2022: Major energy partnership agreement; UAE commits to supply diesel and LNG to France amidst Europe's energy shortages.",
              "2023: ADNOC and TotalEnergies agree on significant LNG contracts worth around $1 billion."
            ]
          }
        ]
      },
      {
        id: "legal",
        label: "Education & Special Projects",
        content: [
          {
            type: "paragraph",
            content: "Cultural and educational collaboration represents one of the most visible dimensions of UAE-France bilateral relations, creating lasting people-to-people connections."
          },
          {
            type: "list",
            content: "Significant milestones include:",
            items: [
              "2017–ongoing: Louvre Abu Dhabi continues as a flagship symbol of bilateral cultural cooperation",
              "February 2024: Launch of MuseoPro joint training initiative for museum professionals.",
              "June 2024: First graduates of joint Emirati-French coding school '42 Abu Dhabi'.",
              "Ongoing: French educational institutions like Sorbonne University Abu Dhabi strengthen cultural ties, now educating thousands of Emirati and expatriate students"
            ]
          }
        ]
      },
      {
        id: "education",
        label: "Science & Advanced Technologies",
        content: [
          {
            type: "paragraph",
            content: "The UAE and France have increasingly focused on future-oriented technological cooperation, aligning their innovation strategies in emerging fields."
          },
          {
            type: "list",
            content: "Recent advancements include:",
            items: [
              "2022: UAE–France initiate deeper space collaboration with joint lunar exploration and satellite projects.",
              "2023–2024: Enhanced cooperation in AI, cybersecurity, digital economy, and smart-city initiatives via bilateral Strategic Dialogues."
            ]
          }
        ]
      }
    ],
    timeline: [
      {
        year: "2023",
        title: "UAE Hosts COP28",
        description: "The UAE hosted the UN Climate Change Conference, highlighting its commitment to sustainability, an area where Sweden has extensive expertise.",
        type: "positive"
      },
      {
        year: "2024",
        title: "Legal Cooperation Agreements",
        description: "Sweden and the UAE sign new agreements on mutual legal assistance and extradition to combat organized crime.",
        type: "positive"
      },
      {
        year: "2024",
        title: "Tawdheef Job Fair",
        description: "Sweden became the first foreign country to host a national pavilion at the UAE's Tawdheef job fair.",
        type: "positive"
      }
    ]
  },
  {
    id: "tensions",
    title: "Points of Tension or Policy Differences",
    content: [
      {
        type: "paragraph",
        content: "Despite the overall positive relationship, the UAE and France do have some differences in foreign policy and governance outlook. Both sides generally handle these with discretion and diplomatic language, ensuring disagreements do not escalate publicly."
      },
      {
        type: "paragraph",
        content: "One area of divergence is the approach to regional conflicts and political transitions. For example during the 2017–2021 Gulf rift, the UAE and Qatar were at odds, whereas France maintained cordial ties with both and encouraged a resolution. France’s neutrality in that intra-GCC dispute could have been a friction point, but it was navigated carefully."
      },
      {
        type: "paragraph",
        content: "French and international NGOs have scrutinized the UAE’s involvement in the Yemen conflict and the use of French weapons there. In 2021, the International Federation for Human Rights (FIDH) published an investigation questioning whether French arms sales made France “partners” in alleged war crimes in Yemen. Paris is aware of these critiques and the French government’s approach has been to address such sensitive issues through quiet diplomacy rather than public criticism."
      },
      {
        type: "paragraph",
        content: "Strategically, France and the UAE usually find themselves on the same side, but not always with the same emphasis. The UAE pursues a multi-aligned foreign policy, maintaining strong ties with powers like the US, China, Russia, and others simultaneously. France, as a NATO/EU member, has its own alliance obligations. This can lead to subtle differences. For example, regarding the Ukraine war: France has been firmly aligned with NATO and the EU in condemning Russia’s invasion and imposing sanctions, while the UAE adopted a more neutral stance – calling for diplomacy and humanitarian aid, but not joining sanctions. The UAE even abstained on some early UN votes and continues dialogue with Moscow. However, this divergence has been managed through consultation. The UAE conveyed that its neutrality is aimed at facilitating mediation and safeguarding its interests, not endorsing aggression."
      },
      {
        type: "paragraph",
        content: "The UAE and France share concerns about extremist ideologies, but their approaches to political Islam – particularly the Muslim Brotherhood – are not identical (see Section 5 for details). The UAE sees Islamist movements related to MB as an existential threat and has a zero-tolerance stance, while France, despite fighting Islamist extremism at home, sometimes engage sporadically with a spectrum of actors abroad. This occasionally yields different tactics – for instance, dealing with Islamist-linked groups in Libya or Iraq. Nonetheless, the overall strategic understanding is aligned: both countries prefer stable, secular governance models in the Middle East and oppose terrorism and violent extremism."
      },
    ],
    relationshipDimensions: [
      {
        name: "Yemen Conflict Positions",
        value: 30,
        description: "Significant differences in approach and involvement"
      },
      {
        name: "Arms Export Policy",
        value: 25,
        description: "Swedish restrictions on defense sales to UAE"
      },
      {
        name: "Human Rights Dialogue",
        value: 40,
        description: "Ongoing differences in perspective and priorities"
      },
      {
        name: "Political Islam Approach",
        value: 20,
        description: "Fundamental differences in policy toward Islamist groups"
      }
    ],
    tabs: [
      {
        id: "yemen",
        label: "Syria (2020–2023)",
        content: [
          {
            type: "paragraph",
            content: "UAE normalises ties with Syria."
          },
          {
            type: "paragraph",
            content: "France maintains conditional stance, advocating for political reforms. Both countries carefully manage this divergence through private diplomatic communication."
          },
          {
            type: "paragraph",
            content: "Both countries carefully manage this divergence through private diplomatic communication."
          }
        ]
      },









      {
        id: "ukraine",
        label: "Ukraine Conflict (2022–2024)",
        content: [
          {
            type: "paragraph",
            content: "UAE adopts neutral stance aimed at mediation and humanitarian support."
          },
          {
            type: "paragraph",
            content: "France strongly aligned with NATO/EU stance against Russia’s actions. Regular dialogue has minimised friction."
          },
          {
            type: "paragraph",
            content: "Regular dialogue has minimised friction."
          }
        ]
      },
      {
        id: "human-rights",
        label: "Human Rights",
        content: [
          {
            type: "paragraph",
            content: "Criticism from French NGOs and civil society on Yemen conflict and internal UAE policies."
          },
          {
            type: "paragraph",
            content: "France has addressed these matters privately, respecting UAE sovereignty."
          }
        ]
      },
      {
        id: "political-islam",
        label: "Political Islam",
        content: [
          {
            type: "paragraph",
            content: "Differences in handling political Islamist groups."
          },
          {
            type: "paragraph",
            content: "UAE has banned the Brotherhood, whereas France has a cautious but less definitive approach."
          },
          {
            type: "paragraph",
            content: "Both agree strategically on counter-extremism and maintain close security cooperation."
          }
        ]
      }
    ]
  },
  {
    id: "sweden-mb",
    title: "France's Stance on the Muslim Brotherhood",
    content: [
      {
        type: "subheading",
        content: "France's Nuanced Approach to the Muslim Brotherhood"
      },


      {
        type: "paragraph",
        content: "France’s view of the Muslim Brotherhood (MB) is nuanced, shaped by both domestic and foreign policy considerations. Unlike the UAE, France has not banned the Brotherhood outright as a terrorist organization. There are no French laws designating the MB as an illegal entity, and historically France even engaged with moderate Islamist political parties (for example, Paris maintained contacts with Egypt’s short-lived MB-led government in 2012)."
      },
      {
        type: "paragraph",
        content: "France's stance on the Muslim Brotherhood is one of cautious engagement coupled with internal vigilance, whereas the UAE's is one of active containment. There is growing Islamophobic rhetoric in civil society in France, that is echoed in political circles. This impacts all Muslims, including members of the Muslim Brotherhood network of organisations."
      },


    ],
    tabs: [
      {
        id: "government",
        label: "France's Evolving Position",
        content: [
          {
            type: "subheading",
            content: "France's Evolving Position"
          },
          {
            type: "paragraph",
            content: "However, in recent years French attitudes have hardened. President Macron's government has been increasingly wary of Islamist ideologies that challenge France's secular values. French officials often include the Brotherhood in the broader category of 'political Islam' that they argue needs to be kept out of undue influence."
          },
          {
            type: "paragraph",
            content: " Domestically, France has cracked down on associations and schools linked to Islamist networks, some of which authorities suspect have ideological ties to the MB. For instance, in 2020–2021, under Macron's 'anti-separatism' initiative, the government dissolved or scrutinized several organizations for propagating extremist ideas – a signal that France is intolerant of MB-inspired activism on its soil (even if not explicitly named)."
          },
          {
            type: "paragraph",
            content: "A French Senate report in 2020 also warned of the MB's growing influence in Europe, indicating high-level awareness of the issue. In essence, while France stops short of the UAE's blanket approach, it does view the Brotherhood's ideology with deep caution. French security services keep an eye on MB-associated groups, and public opinion tends to be skeptical of Islamist movements, especially after terrorism incidents in recent years."
          }


        ]
      },
      {
        id: "thinktanks",
        label: "UAE's Contrasting Approach",
        content: [
          {
            type: "subheading",
            content: "UAE's Contrasting Approach"
          },
          {
            type: "paragraph",
            content: "The UAE's policy on the Muslim Brotherhood is unequivocal – it regards the MB and its affiliates as a grave threat to governance and regional stabilityThe UAE has outlawed the Brotherhood at home (since 2014 it is formally designated a terrorist organization) and has actively worked to counter MB-aligned groups ac. oss the Middle East. This stems from Abu Dhabi's belief that the Brotherhood's blend of political activism and religious ideology undermines state sovereignty and can fuel extremism."
          }
        ]
      },
      {
        id: "individuals",
        label: "Managing Differences in Diplomatic Practice",
        content: [
          {
            type: "subheading",
            content: "Managing Differences in Diplomatic Practice"
          },
          {
            type: "paragraph",
            content: "French diplomacy may engage with elected Islamist politicians where they have public support (for example, Ennahda in Tunisia in the past, or Hamas contacts for humanitarian mediation, etc.), though always cautiously. Additionally, France maintains strong relations with countries that support or harbor MB ideologues (such as Qatar and Turkey), balancing those alongside its friendship with the UAE. Both countries also collaborate in supporting governments (like in Libya) that oppose MB-linked factions."
          },
          {
            type: "paragraph",
            content: "The difference in formal stance towards the MB has not caused open conflict between France and the UAE, but it has been managed with careful diplomacy. The UAE urges its Western partners to take a harder line on the Brotherhood internationally."
          },
          {
            type: "paragraph",
            content: "France, while sympathetic to the UAE's concerns, typically responds by tightening surveillance and intelligence cooperation rather than banning the group A potential friction could arise if France were ever to host exiled MB figures or endorse an MB-inclusive government in the region – but Paris has shown prudence, often aligning subtly with the UAE's preferences."
          }
        ]
      }      
    ],




    graphData: {
      nodes: [
        { id: "swedish_govt", label: "Swedish Government", group: "sweden", size: 30 },
        { id: "sapo", label: "Swedish Security Service (SÄPO)", group: "sweden", size: 25 },
        { id: "foi", label: "Swedish Defense Research Agency", group: "sweden", size: 22 },
        { id: "ui", label: "Swedish Institute of International Affairs", group: "sweden", size: 20 },
        { id: "academia", label: "Swedish Universities", group: "sweden", size: 20 },
        { id: "mb_related", label: "MB-Related Organizations in Sweden", group: "neutral", size: 18 },
        { id: "civil_society", label: "Civil Society Organizations", group: "neutral", size: 15 },
        { id: "media", label: "Swedish Media", group: "sweden", size: 15 }
      ],
      links: [
        { source: "swedish_govt", target: "sapo", value: 5 },
        { source: "sapo", target: "mb_related", value: 4, dashed: true },
        { source: "foi", target: "swedish_govt", value: 3 },
        { source: "ui", target: "swedish_govt", value: 3 },
        { source: "academia", target: "mb_related", value: 2, dashed: true },
        { source: "media", target: "mb_related", value: 3, dashed: true },
        { source: "civil_society", target: "mb_related", value: 2 },
        { source: "academia", target: "foi", value: 2 },
        { source: "academia", target: "ui", value: 2 },
        { source: "swedish_govt", target: "mb_related", value: 3, dashed: true },
        { source: "civil_society", target: "swedish_govt", value: 2 }
      ]
    }
  },
  {
    id: "key-contacts",
    title: "Individuals of Interest Across Media and Thematic Files",
    content: [
      {
        type: "paragraph",
        content: "For UAE delegations seeking to strengthen bilateral relations with Sweden, engaging with the following key stakeholders would be beneficial for advancing diplomatic, economic, and cultural ties."
      }
    ],


    tabs: [
















      {
        id: "government",
        label: "Government Officials",
        content: [
          {
            type: "subheading",
            content: "Government Officials"
          },
          {
            type: "paragraph",
            content: "These key government figures would be essential contacts for any high-level UAE delegation visiting Sweden."
          }
        ],        
        keyContacts: [

          {
            name: "Ulf Kristersson",
            title: "Prime Minister of Sweden",
            description: "Prime Minister of Sweden and leader of the Moderate Party who formed a right-wing coalition government in 2022 after narrowly winning the parliamentary elections. His administration has focused on addressing crime, immigration reform, and energy security while navigating Sweden's NATO accession process and maintaining Sweden's commitment to international cooperation on climate and development issues.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_8.png"
          },
          {
            name: "Carl XVI Gustaf",
            title: "King of Sweden",
            description: "King of Sweden since 1973, serving as the country's head of state and representing Sweden in ceremonial functions while maintaining a politically neutral role in accordance with the constitution. Throughout his long reign, he has focused on environmental issues, technology, and entrepreneurship, often participating in state visits that strengthen Sweden's international relationships.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_9.png"
          },
          {
            name: "Maria Malmer Stenergard",
            title: "Minister for Foreign Affairs of Sweden",
            description: "As Sweden's Minister for Foreign Affairs, Malmer Stenergard comes to this position after previously serving as Minister for Migration in Sweden's government, where she implemented more restrictive immigration policies. Before entering national politics, she worked as a municipal politician in Skåne and has a background in law, experience she now applies to navigating Sweden's diplomatic relationships and foreign policy objectives.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_11.png"
          },
          {
            name: "Benjamin Dousa",
            title: "Minister for International Development Cooperation and Foreign Trade",
            description: "Recently appointed as Sweden's Minister for International Development Cooperation and Foreign Trade, Dousa previously served as chairman of the Moderate Youth League (MUF), where he gained prominence as a young political leader. In his current ministerial role, he oversees Sweden's foreign aid programs and international trade relations, bringing his center-right political perspective to the country's economic diplomacy.",
            influence: "high",
            imageUrl: "/lovable-uploads/Picture_10.png"
          }
        ],
      },










      {
        id: "thinktanks",
        label: "Think Tanks",
        content: [
          {
            type: "subheading",
            content: "Major Think Tanks and Institutions"
          },
          {
            type: "list",
            content: "Important policy and research organizations:",
            items: [
              
              "Swedish Institute of International Affairs (UI): UI is primarily funded by Sweden’s Ministry for Foreign Affairs and reputable Swedish foundations. It conducts independent analyses of Middle Eastern geopolitics, including Gulf regional dynamics significant to UAE interests. There are no documented ties to the Muslim Brotherhood; its engagement is solely analytical.",
              "Stockholm International Peace Research Institute (SIPRI): SIPRI receives major funding from the Swedish government, complemented by international sources, supporting its globally recognised security and arms-control research. Its analysis of arms imports, including UAE’s defence procurement strategies, offers strategic insights relevant to UAE policymakers. There are no documented institutional or financial connections between SIPRI and the Muslim Brotherhood.",
              "Swedish Defense Research Agency (FOI): FOI is directly funded and governed by the Swedish Ministry of Defence, providing strategic security assessments and technological research. Its analyses of Middle Eastern conflicts and emerging security threats are relevant for UAE’s strategic planning. FOI has no institutional, financial, or ideological links to the Muslim Brotherhood.",
              "Institute for Security & Development Policy (ISDP): ISDP's primary funding sources include Sweden’s government and international partners in East Asia and Europe. Its analysis of Eurasian connectivity, including China’s Belt and Road Initiative, aligns closely with UAE’s strategic economic interests. There are no documented links to the Muslim Brotherhood; ISDP remains analytical and critical regarding Islamist groups.",
              "Swedish Institute (SI): SI operates under full Swedish governmental oversight, with funding through state budgets for cultural diplomacy and international exchanges. Its Middle East-focused initiatives, such as the Swedish Dialogue Institute, directly foster UAE–Sweden exchanges in education, innovation, and leadership development. SI has no known institutional or financial affiliations with the Muslim Brotherhood."
            ]
          },
          {
            type: "paragraph",
            content: "Engaging with these institutions would provide valuable insights into Swedish foreign policy perspectives and opportunities for dialogue on regional issues."
          }
        ]

      },


















      {
        id: "individuals",
        label: "Influential Individuals",


        content: [

        ],

        
        keyContacts: [

        {
          name: "Danica Kragić Jensfelt",
          title: "Professor of Robotics at KTH Royal Institute of Technology",
          description: "One of the world's leading experts in robotics and computer vision. She has been named among Sweden's most powerful women in industry and \"Swede of the Year\" for her scientific contributions, while serving as a member of the Royal Swedish Academy of Sciences.",
          influence: "high",
          imageUrl: "/lovable-uploads/22d8e4ad-99a2-4b4d-923d-db52a3fd7d2b.png"
        },
        {
          name: "Antonia Ax:son Johnson",
          title: "Former Chairman of Axel Johnson AB",
          description: "Fourth-generation leader of Axel Johnson AB, a family company founded in 1873, where she served as chairman from 1982 until stepping down as CEO in 2015 while maintaining ownership and board presence. With a net worth of $10.2 billion as of April 2024, she remains one of Sweden's richest and most influential businesswomen, occasionally engaging with Gulf region investors over recent decades.",
          influence: "high",
          imageUrl: "/lovable-uploads/f768b986-b09f-4177-9aea-5d7d503d961e.png"
        },
        



        {
          name: "Anders Kiessling",
          title: "Professor of Aquaculture at the Swedish University of Agricultural Sciences",
          description: "Pioneered \"aqua-agro\" techniques to recycle nutrients between land agriculture and aquaculture. He led an SLU delegation to the UAE to explore research partnerships, exemplifying Sweden's academic approach to addressing global food security challenges through international collaboration.",
          influence: "high",
          imageUrl: "/lovable-uploads/c3b63bf0-b4ac-4e46-92c5-7b251407ddfc.png"
        },
        {
          name: "Peter Värbrand",
          title: "Deputy Vice-Chancellor for External Relations and Innovation at Linköping University",
          description: "Has significantly advanced international academic partnerships. He played a key role in establishing a Memorandum of Understanding between Linköping University and the University of Sharjah in the UAE, focusing on joint research and technology exchange in fields including drone aviation systems and aerospace.",
          influence: "high",
          imageUrl: "/lovable-uploads/39c33f25-e22d-43d3-9cf9-63506736328a.png"
        },
        



        {
          name: "Fredrik Heintz",
          title: "Professor at Linköping University & Chair of Swedish National AI Council",
          description: "Leading AI researcher who shapes Sweden's AI strategy, particularly in AI ethics and autonomous systems. His focus on AI for social good aligns with UAE initiatives, though his work remains primarily centered on Sweden's AI landscape and education.",
          influence: "high",
          imageUrl: "/lovable-uploads/e88f8927-5a5e-4b32-aa0b-b04fa6705dad.png"
        },
        {
          name: "Max Tegmark",
          title: "Swedish-American Physicist & MIT Professor",
          description: "Influential AI safety expert who co-founded the Future of Life Institute and authored the seminal book \"Life 3.0\" on artificial intelligence's future. While based primarily in the US, his Swedish roots enhance Sweden's credibility in AI ethics globally, with his principles on AI governance resonating with UAE efforts to develop AI ethical frameworks.",
          influence: "high",
          imageUrl: "/lovable-uploads/f8a3266d-76bb-484e-8675-b4c0c584f53b.png"
        },
        {
          name: "Sara Mazur",
          title: "Chair of the Wallenberg AI, Autonomous Systems and Software Program (WASP)",
          description: "Former Ericsson R&D head who leads Sweden's largest research program on AI and autonomous systems. She coordinates hundreds of researchers keeping Sweden at the AI forefront, engaging internationally including emerging dialogues with UAE's AI Ministry on smart cities and healthcare applications.",
          influence: "high",
          imageUrl: "/lovable-uploads/80a6c79a-30a4-41e2-a757-3c8e946e40ce.png"
        },
        





        {
          name: "Laurent Leksell",
          title: "Co-founder and Chairman of Elekta AB",
          description: "Built on his father's Gamma Knife invention to create a leading medical technology enterprise for cancer and neurosurgery treatment. Under his leadership, Elekta has become a key partner for UAE healthcare providers in oncology, showcasing advanced radiotherapy solutions at Dubai's Arab Health conference and supporting the Emirates' healthcare advancement goals.",
          influence: "high",
          imageUrl: "/lovable-uploads/7e973896-4f8c-4594-8325-dca6fca727f1.png"
        },
        {
          name: "Björn Zoëga",
          title: "Distinguished orthopedic surgeon and former CEO of Karolinska University Hospital",
          description: "Has played a significant role in exporting Swedish medical expertise to the Gulf region. Since 2016, he has worked with Sweden's GHP Healthcare to oversee specialized spine surgery departments in both Sweden and the UAE, exemplifying effective cross-border medical knowledge transfer.",
          influence: "high",
          imageUrl: "/lovable-uploads/d0860c34-58dc-4811-964b-e983de165b9c.png"
        },





  
        {
          name: "Anna Borg",
          title: "President and CEO of Vattenfall",
          description: "First woman to serve as President and CEO of Vattenfall, Sweden's largest state-owned energy company, where she leads major investments in renewable energy and the transition to fossil-free power. She has engaged with UAE entities like Masdar on renewable energy knowledge exchange and participated in the World Future Energy Summit in Abu Dhabi, offering expertise in offshore wind and grid integration relevant to Gulf energy planning.",
          influence: "high",
          imageUrl: "/lovable-uploads/11d49371-2ac2-4f4e-be90-026808e43a71.png"
        },
        {
          name: "Anders Forslund",
          title: "Co-founder and CEO of Heart Aerospace",
          description: "Pioneering green aviation technology by developing a 30-seat hybrid-electric regional airliner scheduled for launch by 2028. He has presented at the Dubai Airshow's tech showcases and interacted with Masdar's mobility innovation teams, positioning his company for potential future partnerships with UAE airlines seeking to reduce their carbon footprint.",
          influence: "high",
          imageUrl: "/lovable-uploads/5cf19aab-7d37-4981-8e95-4e83b553c3aa.png"
        },
        {
          name: "Lena Sundquist",
          title: "CEO of Climeon",
          description: "CEO of Climeon, a Swedish clean-tech company that converts waste heat into electricity, representing Sweden's innovative green industrialists. Climeon has piloted systems in UAE desalination plants to improve efficiency, while Sundquist and peers regularly participate in UAE sustainability events to share green technology solutions and expertise.",
          influence: "medium",
          imageUrl: "/lovable-uploads/c65c16e7-15b2-4bee-b538-7daa47914bd2.png"
        },
        {
          name: "Greta Thunberg",
          title: "Environmental Activist",
          description: "Swedish environmental activist who sparked the global youth climate movement beginning with her school strikes at age 15, becoming Time's Person of the Year in 2019. While she has criticized oil-producing nations and become involved in pro-Palestinian activism, her global influence was acknowledged when the UAE extended an invitation to her for COP28 in 2023.",
          influence: "high",
          imageUrl: "/lovable-uploads/69aa02d8-2856-40de-8b8f-7c2257c8e37e.png"
        },
        






        {
          name: "Carin Jämtin",
          title: "Director General of the Swedish International Development Cooperation Agency (SIDA)",
          description: "Former government minister who leads Sweden's official aid agency in strategic philanthropy and development funding worldwide. She collaborates with UAE-based philanthropic organizations like Dubai Cares through international forums such as the Global Partnership for Education, leveraging Sweden's resources through partnerships to maximize impact in areas including education for children in crisis zones.",
          influence: "high",
          imageUrl: "/lovable-uploads/cf96487f-726a-4489-9660-3f23b5b5befa.png"
        },
        {
          name: "Niklas Zennström",
          title: "Co-founder of Skype and Tech Entrepreneur",
          description: "Prominent Swedish tech entrepreneur who established Zennström Philanthropies with his wife to fund initiatives in climate change, environmental protection, and social entrepreneurship. His strategic global giving aligns with UAE philanthropic programs in sustainability, and he participates in international networks like the UN and World Economic Forum that include UAE stakeholders, exemplifying tech-driven philanthropy focused on cross-border solutions.",
          influence: "high",
          imageUrl: "/lovable-uploads/9c110fb3-7b9b-4eae-97af-e36589d45ca4.png"
        },







        
        {
          name: "Jacob Wallenberg",
          title: "Vice Chairman of Investor AB (the Wallenberg Investment Holding)",
          description: "Vice chairman of Investor AB and patriarch of Sweden's famed Wallenberg family who presides over a vast portfolio of Sweden's largest companies including ABB, Ericsson, and AstraZeneca. He has led business delegations to the Gulf and overseen Wallenberg-chaired companies like Saab AB which sells defense systems to the UAE, actively supporting stronger Sweden-UAE economic relationships.",
          highlightedNote: "See link below for deep-dive report PDF:",

          // description: "Vice chairman of Investor AB and patriarch of Sweden's famed Wallenberg family who presides over a vast portfolio of Sweden's largest companies including ABB, Ericsson, and AstraZeneca. He has led business delegations to the Gulf and overseen Wallenberg-chaired companies like Saab AB which sells defense systems to the UAE, actively supporting stronger Sweden-UAE economic relationships. See link below for deep-dive report PDF:",
          influence: "high",
          imageUrl: "/lovable-uploads/Picture_1.png",
          pdfLink: "/pdfs/Wallenger.pdf"
        },
        {
          name: "Daniel Elk",
          title: "Co-Founder and CEO of Spotify",
          description: "Co-founder and CEO of Spotify who transformed the global music industry, growing his Stockholm startup into a NYSE-listed giant with users in over 180 markets. He has participated in the UAE's World Government Summit and overseen Spotify's 2018 launch in the Middle East, where the service has gained popularity and developed regional partnerships.",
          influence: "medium",
          imageUrl: "/lovable-uploads/Picture_2.png"
        },
        {
          name: "Sebastian Siemiatkowski",
          title: "CEO and Co-Founder of Klarna",
          description: "CEO and co-founder of Klarna, the Stockholm-based fintech unicorn valued at billions of dollars that pioneered 'buy-now-pay-later' payment solutions. While Klarna has no direct UAE operations, Siemiatkowski's success has attracted interest from Middle Eastern investors and banks, and he has appeared at fintech events with Gulf participants.",
          influence: "medium",
          imageUrl: "/lovable-uploads/Picture_3.png"
        },
        {
          name: "Stefan Persson",
          title: "Long-time Chairman and Chairman Emeritus of H&M Group ",
          description: "Long-time chairman (now chairman emeritus) of H&M Group who expanded the family business into a worldwide fast-fashion empire. Under his leadership, H&M established dozens of stores across the UAE through regional franchise partners and developed partnerships with Emirati mall operators.",
          influence: "low",
          imageUrl: "/lovable-uploads/Picture_4.png"
        },
        
        {
          name: "Magnus Olsson",
          title: "Co-Founder of Careem",
          description: "Swedish co-founder of Careem, the UAE-based ride-hailing company acquired by Uber for $3.1 billion in 2019. He continues to be based partly in Dubai, mentoring startups at Abu Dhabi's Hub71 tech hub and serving as a prime example of Swedish entrepreneurial success in the Gulf region.",
          influence: "high",
          imageUrl: "/lovable-uploads/Picture_5.png"
        },
        {
          name: "Marcus Wallenberg",
          title: "Chairman of Saab, frequent interlocutor with UAE senior leaders ",
          description: "Chairman of Saab and brother of Jacob Wallenberg who serves on the boards of several Wallenberg companies while frequently engaging with UAE leadership on defense and economic cooperation. His influence extends through major Swedish corporations with significant interests in the Middle East.",
          influence: "high",
          imageUrl: "/lovable-uploads/Picture_6.png"
        },
        {
          name: "Börje Ekholm",
          title: "CEO of Ericsson",
          description: "CEO of Ericsson and member of Sweden's AI Commission who leads one of the country's most globally significant technology companies. He has developed important relationships with UAE telecom partners as Ericsson expands its presence in the Middle East telecommunications market.",
          influence: "medium",
          imageUrl: "/lovable-uploads/Picture_7.png"
        },      
      ]

      },



      {
        id: "media",
        label: "Media",
        content: [
          {
            type: "subheading",
            content: "Media"
          },
          {
            type: "paragraph",
            content: "Sweden's media landscape is shaped by influential figures who lead major news organisations, set journalistic standards, and connect Swedish audiences to both domestic and global affairs. These leaders drive innovation in public service broadcasting and print journalism while maintaining Sweden's proud tradition of independent, trustworthy media."
          }
        ],
        keyContacts: [
          {
            name: "Hanna Stjärne",
            title: "CEO of Sveriges Television (SVT)",
            description: "As the leader of Sweden's public service television broadcaster, Stjärne oversees one of the country's most influential media organizations. She has been instrumental in SVT's digital transformation while maintaining its commitment to impartial news coverage.",
            influence: "high",
            imageUrl: "/lovable-uploads/20fd9b55-7a72-4b20-9222-d786abe8b385.png"
          },
          {
            name: "Peter Wolodarski",
            title: "Editor-in-Chief of Dagens Nyheter (DN)",
            description: "Wolodarski leads Sweden's largest morning newspaper and is considered one of the country's most influential media voices. His editorial decisions and columns often shape public discourse on both domestic and international issues.",
            influence: "high",
            imageUrl: "/lovable-uploads/0969f621-44c4-4991-a5f3-01dd1bf5488a.png"
          },
          {
            name: "Jan Helin",
            title: "Program Director at SVT",
            description: "A veteran media figure, Helin has held several top positions in Swedish media, including as editor-in-chief at Aftonbladet before joining SVT. He has significant influence over programming decisions at Sweden's public broadcaster.",
            influence: "medium",
            imageUrl: "/lovable-uploads/f497a46e-61f2-4a52-ba6d-fafbe35bbd48.png"
          },
          {
            name: "Cecilia Uddén",
            title: "Swedish Radio foreign correspondent",
            description: "Uddén is one of Sweden's most respected foreign correspondents, with extensive experience reporting from the Middle East. Her analysis and reporting have shaped Swedish public understanding of the region for decades.",
            influence: "medium",
            imageUrl: "/lovable-uploads/c57e75a6-af2a-4f60-bb3a-ea45a44f17e2.png"
          },
        ]
      }

    ],


  },
  {
    id: "unfriendly-entities",
    title: "Notable French Entities Unfriendly Toward the UAE",
    content: [
      {
        type: "paragraph",
        content: "Despite the strong bilateral relationship, certain French political figures, civil society organizations, and media outlets maintain critical positions toward UAE policies and French-Emirati cooperation."
      }
    ],
    tabs: [
      {
        id: "critics",
        label: "Political Critics",
        content: [
          {
            type: "subheading",
            content: "Political Critics"
          },
          {
            type: "paragraph",
            content: "Left-wing and environmentalist political voices in France regularly question the ethical dimensions of France's strategic partnership with the UAE, particularly regarding arms sales and human rights concerns."
          },
          {
            type: "list",
            content: "Notable critical entities:",
            items: [
              "Jean-Luc Mélenchon, leader of La France Insoumise: Vocal critic of French arms exports and has questioned Gulf cooperation based on ideological grounds.",
              "Europe Ecology–The Greens (EELV): Some party members frequently challenge France’s ties with Gulf states over human rights and environmental concerns."
            ]
          }
        ]
      },
      {
        id: "islamist",
        label: "Civil Society and Media Critics",
        content: [
          {
            type: "subheading",
            content: "Civil Society and Media Critics"
          },
          {
            type: "paragraph",
            content: "Several influential human rights organizations and media platforms in France maintain scrutiny of UAE activities, with some specialized outlets like Intelligence Online conducting targeted reporting on UAE security and technology entities."
          },
          {
            type: "list",
            content: "Notable critical organizations:",
            items: [
              "Human Rights Watch (France office) and International Federation for Human Rights (FIDH) have publicly criticised aspects of UAE’s domestic and foreign policies.",
              "Media outlets (Mediapart, Le Monde, and Libération): Occasional critical coverage of UAE regional actions and lobbying efforts; however, these reports rarely significantly impact high-level bilateral relations.",
              "Intelligence Online is a Paris based OSINT company that reports on intelligence personnel and topics of interest.  It actively targets the EDGE Group, G42 and other UAE entities with negative reporting."
            ]
          }
        ]
      }
    ],
    graphData: {
      nodes: [
        { id: "uae_govt", label: "UAE Government", group: "uae", size: 30 },
        { id: "critics_political", label: "Political Critics", group: "sweden", size: 20 },
        { id: "critics_ngo", label: "Critical NGOs", group: "sweden", size: 20 },
        { id: "critics_media", label: "Media Critics", group: "sweden", size: 18 },
        { id: "critics_academic", label: "Academic Critics", group: "sweden", size: 15 },
        { id: "islamist_orgs", label: "Islamist-Leaning Organizations", group: "neutral", size: 20 },
        { id: "human_rights", label: "Human Rights Organizations", group: "neutral", size: 18 }
      ],
      links: [
        { source: "critics_political", target: "uae_govt", value: 3, dashed: true },
        { source: "critics_ngo", target: "uae_govt", value: 3, dashed: true },
        { source: "critics_media", target: "uae_govt", value: 2, dashed: true },
        { source: "critics_academic", target: "uae_govt", value: 2, dashed: true },
        { source: "islamist_orgs", target: "uae_govt", value: 4, dashed: true },
        { source: "human_rights", target: "uae_govt", value: 3, dashed: true },
        { source: "critics_political", target: "critics_ngo", value: 2 },
        { source: "critics_media", target: "critics_ngo", value: 2 },
        { source: "critics_academic", target: "critics_ngo", value: 1 },
        { source: "islamist_orgs", target: "critics_political", value: 2 },
        { source: "human_rights", target: "critics_ngo", value: 3 }
      ]
    }
  },


  {
    id: "interactive-visualisations",
    title: "Interactive Visualisations",
    
    content: [
      {
        type: "paragraph",
        content: "Below are a number of visusaltions which highlight current trends and themes in the UAE-France relationship discussed above."
      }
    ]
  },





  {
    id: "conclusion",
    title: "Conclusion",
    content: [
      {
        type: "paragraph",
        content: "Overall, UAE–France relations (2019–2024) have significantly strengthened, reflecting high mutual trust, deep strategic alignment, and multifaceted cooperation across defense, economy, culture, and technology. Differences on issues such as human rights or political Islam have been discreetly managed, reflecting mature diplomacy."
      }
    ],
    relationshipDimensions: [
      {
        name: "Overall Bilateral Strength",
        value: 75,
        description: "Positive trajectory with specific areas for improvement"
      },
      {
        name: "Economic Partnership",
        value: 85,
        description: "Strong trade relationship with growth potential"
      },
      {
        name: "Political Alignment",
        value: 60,
        description: "General cooperation with some policy differences"
      },
      {
        name: "Future Cooperation Potential",
        value: 90,
        description: "Significant opportunities for expanded partnership"
      }
    ]
  }
];
