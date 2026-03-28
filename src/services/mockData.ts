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
        body: 'Yaa’iin diinagdee Oromiyaa kan bara 2026 magaalaa Finfinneetti gaggeeffame waliigaltee daldalaa haarawa fi investimantii guddaa fiduun xumurame. Yaa’ii kanaan daldala naannolee gidduu jiru cimsuu fi carraa hojii uumuu irratti xiyyeeffatameera. <br/><br/> Hogganoonni diinagdee fi abbootiin qabeenyaa yaa’ii kana irratti hirmaachuun dhimmoota investimantii gara fuulduraa irratti mari’ataniiru. Waliigalteen kun diinagdee Oromiyaa gara sadarkaa haarawaatti ni ceesisa jedhamee abdatama.'
      },
      en: {
        title: 'Oromia Economic Summit 2026: New Trade Agreements',
        excerpt: 'The Oromia Economic Summit 2026 concluded with new trade agreements and significant investment opportunities.',
        body: 'The Oromia Economic Summit 2026, held in Addis Ababa, concluded with new trade agreements and significant investment opportunities. The summit focused on strengthening inter-regional trade and creating job opportunities. <br/><br/> Economic leaders and investors participated in the summit to discuss future investment matters. This agreement is expected to transition the Oromian economy to a new level.'
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
        body: 'Aadaan Oromoo hambaa seenaa guddaa qabu dha. Hambaa kana tiksuu fi gara dhaloota itti aanuutti dabarsuuf piroojektiin haarawa jalqabameera. Piroojektiin kun aadaa, afaan fi seenaa Oromoo qorachuu fi galmeessuu irratti xiyyeeffata.'
      },
      en: {
        title: 'Cultural Heritage Preservation Project',
        excerpt: 'A new project has been launched to preserve Oromo cultural heritage and pass it on to the next generation.',
        body: 'Oromo culture is a rich historical heritage. A new project has been launched to preserve this heritage and pass it on to the next generation. The project focuses on researching and documenting Oromo culture, language, and history.'
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
        body: 'Mootummaan fooyya’iinsa siyaasaa haarawa sirna dimookiraasii cimsuuf gargaaru labseera. Fooyya’iinsi kun hirmaannaa uummataa guddisuu fi haqni akka mirkanaa’u gochuu irratti xiyyeeffata.'
      },
      en: {
        title: 'New Political Reforms Announced',
        excerpt: 'The government has announced new political reforms aimed at strengthening the democratic system.',
        body: 'The government has announced new political reforms aimed at strengthening the democratic system. These reforms focus on increasing public participation and ensuring justice.'
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
        body: 'Istaadiyeemiin ispoortii guddaan magaalaa Finfinnee keessatti argamu babal’isuuf karoorfameera. Kunis dandeettii keessummeessuu istaadiyeemichaa dabaluu fi tajaajila ispoortii fooyyessuuf gargaara.'
      },
      en: {
        title: 'Sports Stadium Expansion Plan',
        excerpt: 'A major sports stadium in Addis Ababa is planned for expansion to increase its capacity.',
        body: 'A major sports stadium in Addis Ababa is planned for expansion to increase its capacity. This will help increase the stadium\'s hosting capacity and improve sports services.'
      }
    }
  }
];
