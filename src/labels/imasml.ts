import { FeedDefinition, Label } from '../types.js';

const TARGET_HANDLE = 'imasml-labeler.endless.dance';

export const IMASML_FEEDS: FeedDefinition[] = [
  {
    shortName: 'idol-princess',
    displayName: 'ミリオンライブ！ Princess',
    description: 'ミリオンライブ！ Princess属性のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-fairy',
    displayName: 'ミリオンライブ！ Fairy',
    description: 'ミリオンライブ！ Fairy属性のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-angel',
    displayName: 'ミリオンライブ！ Angel',
    description: 'ミリオンライブ！ Angel属性のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
];

export const IMASML_LABELS: Label[] = [
  {
    rkey: '3mcjsi3xlmk2c',
    identifier: 'idol-mirai',
    locales: [
      { lang: 'ja', name: '春日未来', description: '天真爛漫なんでもチャレンジ！ まっすぐ元気な女の子！' },
      { lang: 'en', name: 'Mirai Kasuga', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsiatc222c',
    identifier: 'idol-shizuka',
    locales: [
      {
        lang: 'ja',
        name: '最上静香',
        description: 'トップアイドルまでまっすぐに。 強がりながら、ひたむきに頑張る少女',
      },
      { lang: 'en', name: 'Shizuka Mogami', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsifnxb22c',
    identifier: 'idol-tsubasa',
    locales: [
      { lang: 'ja', name: '伊吹翼', description: 'めざせモテモテハッピーライフ♪ おしゃれ大好きな女の子！' },
      { lang: 'en', name: 'Tsubasa Ibuki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsikisdk2c',
    identifier: 'idol-kotoha',
    locales: [
      { lang: 'ja', name: '田中琴葉', description: 'みんなに好かれる優等生。 真面目で一途な美少女アイドル！' },
      { lang: 'en', name: 'Kotoha Tanaka', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsipe5222c',
    identifier: 'idol-elena',
    locales: [
      { lang: 'ja', name: '島原エレナ', description: '毎日がカーニバル♪ スキンシップが大好きな青い目の美少女！' },
      { lang: 'en', name: 'Elena Shimabara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsiu6oe22c',
    identifier: 'idol-minako',
    locales: [
      { lang: 'ja', name: '佐竹美奈子', description: '料理も愛情も特盛で♪ お世話が大好きな看板娘アイドル！' },
      { lang: 'en', name: 'Minako Satake', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsiz32b22c',
    identifier: 'idol-megumi',
    locales: [
      { lang: 'ja', name: '所恵美', description: '気さくでオシャレで仲間思いで、 ちょっぴりセクシーなJKギャル！' },
      { lang: 'en', name: 'Megumi Tokoro', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsj5wjts2c',
    identifier: 'idol-matsuri',
    locales: [
      {
        lang: 'ja',
        name: '徳川まつり',
        description: 'まつりは姫なのです♪ 独自ワールドを貫く、ふわふわお姫様アイドル！',
      },
      { lang: 'en', name: 'Matsuri Tokugawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsjctwxc2c',
    identifier: 'idol-serika',
    locales: [
      { lang: 'ja', name: '箱崎星梨花', description: '純粋無垢で好奇心あふれる箱入り娘アイドル！' },
      { lang: 'en', name: 'Serika Hakozaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsjhp5qs2c',
    identifier: 'idol-akane',
    locales: [
      { lang: 'ja', name: '野々原茜', description: '自分大好き、いつでもポジティブ！ お調子者でフリーダムな女の子！' },
      { lang: 'en', name: 'Akane Nonohara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsjmjl5s2c',
    identifier: 'idol-anna',
    locales: [
      { lang: 'ja', name: '望月杏奈', description: 'いつもは無口なゲーム少女。 お仕事中だけハイテンション！' },
      { lang: 'en', name: 'Anna Mochizuki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsjrg7u22c',
    identifier: 'idol-roco',
    locales: [
      { lang: 'ja', name: 'ロコ', description: 'ステージは最高のキャンバス！ ポップでキュートな芸術家アイドル！' },
      { lang: 'en', name: 'Roco', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsjwap7k2c',
    identifier: 'idol-yuriko',
    locales: [
      { lang: 'ja', name: '七尾百合子', description: '妄想すると止まらない、 夢見がちな文学少女アイドル' },
      { lang: 'en', name: 'Yuriko Nanao', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsk33t3c2c',
    identifier: 'idol-sayoko',
    locales: [
      {
        lang: 'ja',
        name: '高山紗代子',
        description: '憧れのトップアイドル目指して、 全力で前へ進み続ける熱血系アイドル！',
      },
      { lang: 'en', name: 'Sayoko Takayama', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsk7wzus2c',
    identifier: 'idol-arisa',
    locales: [
      { lang: 'ja', name: '松田亜利沙', description: 'アイドルちゃんが大好き！ 時に愛が暴走する超☆元気アイドル！' },
      { lang: 'en', name: 'Arisa Matsuda', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsketmmk2c',
    identifier: 'idol-umi',
    locales: [
      { lang: 'ja', name: '高坂海美', description: 'いつもじっとしていられない！ 明るく元気でアクティブな女の子！' },
      { lang: 'en', name: 'Umi Kousaka', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjskjolm22c',
    identifier: 'idol-iku',
    locales: [
      { lang: 'ja', name: '中谷育', description: 'オトナのお姉さんに憧れて、 かわいく背伸びする小さな頑張り屋さん！' },
      { lang: 'en', name: 'Iku Nakatani', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjskojtes2c',
    identifier: 'idol-tomoka',
    locales: [
      { lang: 'ja', name: '天空橋朋花', description: 'ファンは愛すべき子豚ちゃん！？ ひざまずきたくなる女の子！' },
      { lang: 'en', name: 'Tomoka Tenkubashi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjskteils2c',
    identifier: 'idol-emily',
    locales: [
      { lang: 'ja', name: 'エミリー・スチュアート', description: '大和撫子になりたい！！雅で可憐な英国女子' },
      { lang: 'en', name: 'Emily Stewart', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsky7bps2c',
    identifier: 'idol-shiho',
    locales: [
      { lang: 'ja', name: '北沢志保', description: '孤高でクールでストイック！ 高いプロ意識を持つ14歳アイドル！' },
      { lang: 'en', name: 'Shiho Kitazawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsl52cns2c',
    identifier: 'idol-ayumu',
    locales: [
      { lang: 'ja', name: '舞浜歩', description: '魅せろ本格ダンス！ 目指せ！世界一のダンスアイドル！' },
      { lang: 'en', name: 'Ayumu Maihama', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjslbv3rs2c',
    identifier: 'idol-hinata',
    locales: [
      { lang: 'ja', name: '木下ひなた', description: '田舎からやって来た！ のんびり純朴なカントリーガール！' },
      { lang: 'en', name: 'Hinata Kinoshita', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjslgqbm22c',
    identifier: 'idol-kana',
    locales: [
      {
        lang: 'ja',
        name: '矢吹可奈',
        description: 'ちょっぴり音痴・・・でも、歌が大好き！ いつも笑顔でがんばる女の子！',
      },
      { lang: 'en', name: 'Kana Yabuki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsllmbs22c',
    identifier: 'idol-nao',
    locales: [
      { lang: 'ja', name: '横山奈緒', description: '明るく元気で人懐っこい関西娘。 劇場のムードメーカー！' },
      { lang: 'en', name: 'Nao Yokoyama', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjslqh6t22c',
    identifier: 'idol-chizuru',
    locales: [
      { lang: 'ja', name: '二階堂千鶴', description: 'あふれる気品はセレブの証！？ 気高きゴージャスアイドル！' },
      { lang: 'en', name: 'Chizuru Nikaido', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjslvbuzc2c',
    identifier: 'idol-konomi',
    locales: [
      { lang: 'ja', name: '馬場このみ', description: '見た目は子供、中身はアダルト？ 小さな最年長アイドル！！' },
      { lang: 'en', name: 'Konomi Baba', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsm255rc2c',
    identifier: 'idol-tamaki',
    locales: [
      { lang: 'ja', name: '大神環', description: 'いつもわんぱく、100％元気！ 無邪気で可愛い女の子' },
      { lang: 'en', name: 'Tamaki Ogami', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsm6xsyc2c',
    identifier: 'idol-fuka',
    locales: [
      { lang: 'ja', name: '豊川風花', description: '元看護師のダイナマイトバディ！ 目指すは・・・正統派アイドル！？' },
      { lang: 'en', name: 'Fuka Toyokawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsmdtmdk2c',
    identifier: 'idol-miya',
    locales: [
      { lang: 'ja', name: '宮尾美也', description: 'のんびり夢に向かう、 頑張り屋のゆるふわアイドル！' },
      { lang: 'en', name: 'Miya Miyao', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsmip4vk2c',
    identifier: 'idol-noriko',
    locales: [
      { lang: 'ja', name: '福田のり子', description: '格闘技大好き！ 気っ風がよくて姉御肌、ボーイッシュな女の子！' },
      { lang: 'en', name: 'Noriko Fukuda', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-princess'],
  },
  {
    rkey: '3mcjsmnklj22c',
    identifier: 'idol-mizuki',
    locales: [
      { lang: 'ja', name: '真壁瑞希', description: '真面目で無表情でマイペース、 でも感受性豊かな女子高生' },
      { lang: 'en', name: 'Mizuki Makabe', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsmsfdns2c',
    identifier: 'idol-karen',
    locales: [
      { lang: 'ja', name: '篠宮可憐', description: '見た目はパーフェクト！ だけど中身は臆病な女の子！' },
      { lang: 'en', name: 'Karen Shinomiya', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsmxaqcs2c',
    identifier: 'idol-rio',
    locales: [
      { lang: 'ja', name: '百瀬莉緒', description: 'いつでも誘惑セクシーアピール♡ 小悪魔系お姉さんアイドル！' },
      { lang: 'en', name: 'Rio Momose', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsn43fjs2c',
    identifier: 'idol-subaru',
    locales: [
      { lang: 'ja', name: '永吉昴', description: 'ボーイッシュだけど可愛い系！ 素直でまっすぐな野球少女！' },
      { lang: 'en', name: 'Subaru Nagayoshi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsnawdk22c',
    identifier: 'idol-reika',
    locales: [
      { lang: 'ja', name: '北上麗花', description: 'ハイスペックでマイペース♪ 無邪気なナチュラル美人アイドル！' },
      { lang: 'en', name: 'Reika Kitakami', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsnfral22c',
    identifier: 'idol-momoko',
    locales: [
      { lang: 'ja', name: '周防桃子', description: '生意気？強がり？ 小さくて意地っぱりな妹系アイドル！' },
      { lang: 'en', name: 'Momoko Suou', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsnknpfs2c',
    identifier: 'idol-julia',
    locales: [
      {
        lang: 'ja',
        name: 'ジュリア',
        description: '目指すはロックの頂点！ 最高にクールでスタイリッシュな・・・アイドル！？',
      },
      { lang: 'en', name: 'Julia', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsnpj33k2c',
    identifier: 'idol-tsumugi',
    locales: [
      { lang: 'ja', name: '白石紬', description: '生真面目だけど、ちょっぴり早トチリな女子高生！' },
      { lang: 'en', name: 'Tsumugi Shiraishi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-fairy'],
  },
  {
    rkey: '3mcjsnueqjs2c',
    identifier: 'idol-kaori',
    locales: [
      { lang: 'ja', name: '桜守歌織', description: '大人エレガントな香り漂う音楽教室のお姉さん' },
      { lang: 'en', name: 'Kaori Sakuramori', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-angel'],
  },
  {
    rkey: '3mcjsnza56s2c',
    identifier: 'staff-misaki',
    locales: [
      { lang: 'ja', name: '青羽美咲', description: '' },
      { lang: 'en', name: 'Misaki Aoba', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
  },
];
