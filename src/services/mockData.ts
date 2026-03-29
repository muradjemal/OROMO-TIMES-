import { Article } from '../types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'oromia-economic-summit-2026',
    category: 'economy',
    author: {
      name: 'Tolera Nagaasaa',
      avatar: 'https://picsum.photos/seed/tolera/100/100',
    },
    publishedAt: '2026-03-28T10:00:00Z',
    image: 'https://picsum.photos/seed/economy/1200/800',
    readingTime: 5,
    isBreaking: true,
    content: {
      ao: {
        title: 'Yaa’ii Diinagdee Oromiyaa 2026: Waliigaltee Haarawa',
        excerpt: 'Yaa’iin diinagdee Oromiyaa kan bara 2026 waliigaltee daldalaa haarawa fi investimantii guddaa fiduun xumurame.',
        body: 'Yaa’iin diinagdee Oromiyaa kan bara 2026 magaalaa Finfinneetti gaggeeffame waliigaltee daldalaa haarawa fi investimantii guddaa fiduun xumurame. Yaa’ii kanaan daldala naannolee gidduu jiru cimsuu fi carraa hojii uumuu irratti xiyyeeffatameera.\n\n### Investimantii fi Daldala\n\nHogganoonni diinagdee fi abbootiin qabeenyaa yaa’ii kana irratti hirmaachuun dhimmoota investimantii gara fuulduraa irratti mari’ataniiru. Waliigalteen kun diinagdee Oromiyaa gara sadarkaa haarawaatti ni ceesisa jedhamee abdatama.\n\n*   Investimantii haarawa\n*   Daldala naannolee gidduu\n*   Carraa hojii uumuu'
      },
      en: {
        title: 'Oromia Economic Summit 2026: New Trade Agreements',
        excerpt: 'The Oromia Economic Summit 2026 concluded with new trade agreements and significant investment opportunities.',
        body: 'The Oromia Economic Summit 2026, held in Addis Ababa, concluded with new trade agreements and significant investment opportunities. The summit focused on strengthening inter-regional trade and creating job opportunities.\n\n### Investment and Trade\n\nEconomic leaders and investors participated in the summit to discuss future investment matters. This agreement is expected to transition the Oromian economy to a new level.\n\n*   New investments\n*   Inter-regional trade\n*   Job creation'
      }
    }
  },
  {
    id: '2',
    slug: 'cultural-heritage-preservation-project',
    category: 'culture',
    author: {
      name: 'Bilisummaa Abbabaa',
      avatar: 'https://picsum.photos/seed/bilisummaa/100/100',
    },
    publishedAt: '2026-03-28T08:30:00Z',
    image: 'https://picsum.photos/seed/culture/1200/800',
    readingTime: 8,
    content: {
      ao: {
        title: 'Piroojektii Hambaa Aadaa Tiksuu',
        excerpt: 'Hambaa aadaa Oromoo tiksuu fi gara dhaloota itti aanuutti dabarsuuf piroojektiin haarawa jalqabame.',
        body: 'Aadaan Oromoo hambaa seenaa guddaa qabu dha. Hambaa kana tiksuu fi gara dhaloota itti aanuutti dabarsuuf piroojektiin haarawa jalqabameera. \n\n### Galma Piroojektichaa\n\nPiroojektiin kun aadaa, afaan fi seenaa Oromoo qorachuu fi galmeessuu irratti xiyyeeffata. \n\n> "Aadaan keenya eenyummaa keenya dha." \n\nKunis dhaloota itti aanuuf qabeenya guddaa dha.'
      },
      en: {
        title: 'Cultural Heritage Preservation Project',
        excerpt: 'A new project has been launched to preserve Oromo cultural heritage and pass it on to the next generation.',
        body: 'Oromo culture is a rich historical heritage. A new project has been launched to preserve this heritage and pass it on to the next generation. \n\n### Project Goals\n\nThe project focuses on researching and documenting Oromo culture, language, and history. \n\n> "Our culture is our identity." \n\nThis is a great asset for the next generation.'
      }
    }
  },
  {
    id: '3',
    slug: 'new-political-reforms-announced',
    category: 'politics',
    author: {
      name: 'Gammachuu Dajanee',
      avatar: 'https://picsum.photos/seed/gammachuu/100/100',
    },
    publishedAt: '2026-03-27T15:45:00Z',
    image: 'https://picsum.photos/seed/politics/1200/800',
    readingTime: 6,
    content: {
      ao: {
        title: 'Fooyya’iinsa Siyaasaa Haarawa Labsame',
        excerpt: 'Mootummaan fooyya’iinsa siyaasaa haarawa sirna dimookiraasii cimsuuf gargaaru labseera.',
        body: 'Mootummaan fooyya’iinsa siyaasaa haarawa sirna dimookiraasii cimsuuf gargaaru labseera. \n\n### Jijjiirama Eegamu\n\nFooyya’iinsi kun hirmaannaa uummataa guddisuu fi haqni akka mirkanaa’u gochuu irratti xiyyeeffata. \n\n1.  Hirmaannaa uummataa\n2.  Haqni mirkanaa’uu\n3.  Sirna dimookiraasii'
      },
      en: {
        title: 'New Political Reforms Announced',
        excerpt: 'The government has announced new political reforms aimed at strengthening the democratic system.',
        body: 'The government has announced new political reforms aimed at strengthening the democratic system. \n\n### Expected Changes\n\nThese reforms focus on increasing public participation and ensuring justice. \n\n1.  Public participation\n2.  Ensuring justice\n3.  Democratic system'
      }
    }
  },
  {
    id: '4',
    slug: 'sports-stadium-expansion-plan',
    category: 'sports',
    author: {
      name: 'Soolomoon Baqqalaa',
      avatar: 'https://picsum.photos/seed/solomon/100/100',
    },
    publishedAt: '2026-03-27T12:20:00Z',
    image: 'https://picsum.photos/seed/sports/1200/800',
    readingTime: 4,
    content: {
      ao: {
        title: 'Karoora Babal’isuu Istaadiyeemii Ispoortii',
        excerpt: 'Istaadiyeemiin ispoortii guddaan magaalaa Finfinnee keessatti argamu babal’isuuf karoorfameera.',
        body: 'Istaadiyeemiin ispoortii guddaan magaalaa Finfinnee keessatti argamu babal’isuuf karoorfameera. \n\n### Tajaajila Fooyya’aa\n\nKunis dandeettii keessummeessuu istaadiyeemichaa dabaluu fi tajaajila ispoortii fooyyessuuf gargaara. \n\n*   Dandeettii dabaluu\n*   Tajaajila fooyyessuu\n*   Ispoortii guddisuu'
      },
      en: {
        title: 'Sports Stadium Expansion Plan',
        excerpt: 'A major sports stadium in Addis Ababa is planned for expansion to increase its capacity.',
        body: 'A major sports stadium in Addis Ababa is planned for expansion to increase its capacity. \n\n### Improved Services\n\nThis will help increase the stadium\'s hosting capacity and improve sports services. \n\n*   Increase capacity\n*   Improve services\n*   Promote sports'
      }
    }
  },
  {
    id: '5',
    slug: 'oromia-tech-startup-boom',
    category: 'economy',
    author: {
      name: 'Lammaa Magarsaa',
      avatar: 'https://picsum.photos/seed/lamma/100/100',
    },
    publishedAt: '2026-03-26T09:00:00Z',
    image: 'https://picsum.photos/seed/tech/1200/800',
    readingTime: 7,
    content: {
      ao: {
        title: 'Guddina Teeknoolojii Oromiyaa',
        excerpt: 'Dhaabbileen teeknoolojii haarawa Oromiyaa keessatti babal’achaa jiru.',
        body: 'Dhaabbileen teeknoolojii haarawa Oromiyaa keessatti babal’achaa jiru. Kunis carraa hojii uumuu fi guddina diinagdeetiif gumaacha guddaa qaba.'
      },
      en: {
        title: 'Oromia Tech Startup Boom',
        excerpt: 'New technology startups are expanding in Oromia.',
        body: 'New technology startups are expanding in Oromia. This has a significant contribution to job creation and economic growth.'
      }
    }
  },
  {
    id: '6',
    slug: 'traditional-medicine-research',
    category: 'culture',
    author: {
      name: 'Meetii Hayiluu',
      avatar: 'https://picsum.photos/seed/metti/100/100',
    },
    publishedAt: '2026-03-25T14:00:00Z',
    image: 'https://picsum.photos/seed/medicine/1200/800',
    readingTime: 10,
    content: {
      ao: {
        title: 'Qorannoo Qoricha Aadaa',
        excerpt: 'Qoricha aadaa Oromoo irratti qorannoon saayinsaawaa gaggeeffamaa jira.',
        body: 'Qoricha aadaa Oromoo irratti qorannoon saayinsaawaa gaggeeffamaa jira. Kunis beekumsa aadaa fi saayinsii walitti fiduuf gargaara.'
      },
      en: {
        title: 'Traditional Medicine Research',
        excerpt: 'Scientific research is being conducted on Oromo traditional medicine.',
        body: 'Scientific research is being conducted on Oromo traditional medicine. This helps in bringing together traditional knowledge and science.'
      }
    }
  },
  {
    id: '7',
    slug: 'environmental-protection-initiative',
    category: 'politics',
    author: {
      name: 'Obsaa Nagaasaa',
      avatar: 'https://picsum.photos/seed/obsa/100/100',
    },
    publishedAt: '2026-03-24T11:00:00Z',
    image: 'https://picsum.photos/seed/environment/1200/800',
    readingTime: 5,
    content: {
      ao: {
        title: 'Inisheetiivii Eegumsa Naannoo',
        excerpt: 'Naannoo eeguu fi jijjiirama qilleensaa ittisuuf inisheetiiviin haarawa jalqabame.',
        body: 'Naannoo eeguu fi jijjiirama qilleensaa ittisuuf inisheetiiviin haarawa jalqabame. Kunis dhaloota dhufuuf naannoo mijataa uumuuf gargaara.'
      },
      en: {
        title: 'Environmental Protection Initiative',
        excerpt: 'A new initiative has been launched to protect the environment and prevent climate change.',
        body: 'A new initiative has been launched to protect the environment and prevent climate change. This helps in creating a suitable environment for the next generation.'
      }
    }
  },
  {
    id: '8',
    slug: 'local-marathon-success',
    category: 'sports',
    author: {
      name: 'Fireew Baqqalaa',
      avatar: 'https://picsum.photos/seed/firew/100/100',
    },
    publishedAt: '2026-03-23T07:00:00Z',
    image: 'https://picsum.photos/seed/marathon/1200/800',
    readingTime: 3,
    content: {
      ao: {
        title: 'Milkaa’ina Maaraatoonii Naannoo',
        excerpt: 'Atleetoonni Oromoo maaraatoonii naannoo irratti milkaa’ina guddaa galmeessan.',
        body: 'Atleetoonni Oromoo maaraatoonii naannoo irratti milkaa’ina guddaa galmeessan. Kunis dandeettii ispoortii naannichaa agarsiisa.'
      },
      en: {
        title: 'Local Marathon Success',
        excerpt: 'Oromo athletes recorded great success in the local marathon.',
        body: 'Oromo athletes recorded great success in the local marathon. This shows the sports potential of the region.'
      }
    }
  }
];
