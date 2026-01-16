import { FeedDefinition, Label } from '../types.js';

const TARGET_HANDLE = 'imascg-labeler.endless.dance';

export const IMASCG_FEEDS: FeedDefinition[] = [
  {
    shortName: 'idol-cute',
    displayName: 'シンデレラガールズ Cute',
    description: 'シンデレラガールズ Cute属性のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-cool',
    displayName: 'シンデレラガールズ Cool',
    description: 'シンデレラガールズ Cool属性のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-passion',
    displayName: 'シンデレラガールズ Passion',
    description: 'シンデレラガールズ Passion属性のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-0a',
    displayName: 'シンデレラガールズ あ行',
    description: 'シンデレラガールズ あ行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-1ka',
    displayName: 'シンデレラガールズ か行',
    description: 'シンデレラガールズ か行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-2sa',
    displayName: 'シンデレラガールズ さ行',
    description: 'シンデレラガールズ さ行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-3ta',
    displayName: 'シンデレラガールズ た行',
    description: 'シンデレラガールズ た行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-4na',
    displayName: 'シンデレラガールズ な行',
    description: 'シンデレラガールズ な行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-5ha',
    displayName: 'シンデレラガールズ は行',
    description: 'シンデレラガールズ は行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-6ma',
    displayName: 'シンデレラガールズ ま行',
    description: 'シンデレラガールズ ま行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-7ya',
    displayName: 'シンデレラガールズ や行',
    description: 'シンデレラガールズ や行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-8ra',
    displayName: 'シンデレラガールズ ら行',
    description: 'シンデレラガールズ ら行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
  {
    shortName: 'idol-9wa',
    displayName: 'シンデレラガールズ わ行',
    description: 'シンデレラガールズ わ行の名前のアイドル一覧です',
    targetHandle: TARGET_HANDLE,
  },
];

export const IMASCG_LABELS: Label[] = [
  {
    rkey: '3mcjvke35wk2c',
    identifier: 'idol-chinatsu',
    locales: [
      { lang: 'ja', name: '相川千夏', description: 'いつでも洗練された自分でいたいの。アイドルとしても' },
      { lang: 'en', name: 'Chinatsu Aikawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvkivxzs2c',
    identifier: 'idol-nagisa',
    locales: [
      { lang: 'ja', name: '愛野渚', description: 'ナイスパス！じゃなくて、ナイスサポート！' },
      { lang: 'en', name: 'Nagisa Aino', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvknqs522c',
    identifier: 'idol-yumi',
    locales: [
      { lang: 'ja', name: '相葉夕美', description: '私のこと、あの公園のお花みたいにキレイに咲かせてほしいなっ♪' },
      { lang: 'en', name: 'Yumi Aiba', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvkslkbs2c',
    identifier: 'idol-yukino',
    locales: [
      { lang: 'ja', name: '相原雪乃', description: 'ティーカップに映る景色…その先の景色も、見てみたくなりましたの' },
      { lang: 'en', name: 'Yukino Aihara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvkxiawk2c',
    identifier: 'idol-miria',
    locales: [
      {
        lang: 'ja',
        name: '赤城みりあ',
        description: 'みりあ、アイドルになったんだよって、言ってもいい？もういいかなっ？',
      },
      { lang: 'en', name: 'Miria Akagi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvl4d6ws2c',
    identifier: 'idol-erika',
    locales: [
      { lang: 'ja', name: '赤西瑛梨華', description: 'みんなのハートまとめてバッキュン☆どうどう？やられた？' },
      { lang: 'en', name: 'Erika Akanishi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvlba3h22c',
    identifier: 'idol-fuka',
    locales: [
      { lang: 'ja', name: '浅野風香', description: 'ご、ごめんなさいっ ! 謝るの癖で…ごめんなさい…' },
      { lang: 'en', name: 'Fuka Asano', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvlg2pos2c',
    identifier: 'idol-nanami',
    locales: [
      { lang: 'ja', name: '浅利七海', description: '可愛くて美味しいお魚アイドル！産地直送れすよ！' },
      { lang: 'en', name: 'Nanami Asari', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvlkv35c2c',
    identifier: 'idol-anastasia',
    locales: [
      { lang: 'ja', name: 'アナスタシア', description: 'ミーニャ ザヴート アーニャ。私の名前は…アナスタシア、です' },
      { lang: 'en', name: 'Anastasia', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvlpsux22c',
    identifier: 'idol-nana',
    locales: [
      { lang: 'ja', name: '安部菜々', description: 'ウサミンパワーでカラフルメイドにメルヘンチェンジ！' },
      { lang: 'en', name: 'Nana Abe', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvlup4x22c',
    identifier: 'idol-honoka',
    locales: [
      { lang: 'ja', name: '綾瀬穂乃香', description: 'いつかきっと、ガラスの靴でアティチュードを' },
      { lang: 'en', name: 'Honoka Ayase', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvlzjpac2c',
    identifier: 'idol-hina',
    locales: [
      { lang: 'ja', name: '荒木比奈', description: 'アイドルしつつ漫画描くのは流石にハードっス' },
      { lang: 'en', name: 'Hina Araki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvm6eehc2c',
    identifier: 'idol-kanna',
    locales: [
      { lang: 'ja', name: '有浦柑奈', description: '歌で、世界をラブ＆ピースにしましょうっ♪' },
      { lang: 'en', name: 'Kanna Ariura', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvmd6vrc2c',
    identifier: 'idol-miyako',
    locales: [
      { lang: 'ja', name: '安斎都', description: 'いつだって真実はこの私、都のもの！……決まった！' },
      { lang: 'en', name: 'Miyako Anzai', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvmhzvq22c',
    identifier: 'idol-eve',
    locales: [
      {
        lang: 'ja',
        name: 'イヴ・サンタクロース',
        description: 'よい子のみんな…じゃなくて、ファンのみんなにメリーLIVEをプレゼント～♪',
      },
      { lang: 'en', name: 'Eve Santaclaus', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvmmwgjc2c',
    identifier: 'idol-kyoko',
    locales: [
      {
        lang: 'ja',
        name: '五十嵐響子',
        description: '趣味はお料理、洗濯、掃除…家事全般ですねっ！ちなみに得意料理は肉じゃがです！',
      },
      { lang: 'en', name: 'Kyoko Igarashi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvmrrkf22c',
    identifier: 'idol-akiha',
    locales: [
      {
        lang: 'ja',
        name: '池袋晶葉',
        description: 'この天才少女・池袋晶葉、諸君のために素晴らしいロボットを開発してきたぞ',
      },
      { lang: 'en', name: 'Akiha Ikebukuro', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvmwmhg22c',
    identifier: 'idol-megumi',
    locales: [
      { lang: 'ja', name: '伊集院惠', description: 'アイドルの旅、これまでのどんな旅より楽しくなる気がするわ' },
      { lang: 'en', name: 'Megumi Ijuin', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvn3gzpc2c',
    identifier: 'idol-shiki',
    locales: [
      { lang: 'ja', name: '一ノ瀬志希', description: 'ちょっとだけ刺激の強いあたし、投与しよー♪' },
      { lang: 'en', name: 'Shiki Ichinose', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvnabg522c',
    identifier: 'idol-nina',
    locales: [
      { lang: 'ja', name: '市原仁奈', description: 'じゃーん ! キグルミ着てパワーアップでごぜーます !' },
      { lang: 'en', name: 'Nina Ichihara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvnf4c6s2c',
    identifier: 'idol-kana',
    locales: [
      { lang: 'ja', name: '今井加奈', description: 'せーの、かなかなファイファイ、おーっ！' },
      { lang: 'en', name: 'Kana Imai', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvnk2mls2c',
    identifier: 'idol-setsuna',
    locales: [
      {
        lang: 'ja',
        name: '井村雪菜',
        description: 'メイクの研究はかかせません。前よりもっと自分を好きになりたいから♪',
      },
      { lang: 'en', name: 'Setsuna Imura', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvnovfps2c',
    identifier: 'idol-suzuho',
    locales: [
      { lang: 'ja', name: '上田鈴帆', description: '空前の着ぐるみブームが訪れる日も近そうばい！' },
      { lang: 'en', name: 'Suzuho Ueda', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvntpyyc2c',
    identifier: 'idol-mutsumi',
    locales: [
      { lang: 'ja', name: '氏家むつみ', description: 'これはもしかしたら…新たな冒険の幕開けかも…！' },
      { lang: 'en', name: 'Mutsumi Ujiie', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvnykmas2c',
    identifier: 'idol-otoha',
    locales: [
      {
        lang: 'ja',
        name: '梅木音葉',
        description: '私たちも心を開いて、自然のオーケストラが奏でる音のひとつになりましょう…',
      },
      { lang: 'en', name: 'Otoha Umeki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvo5fdgc2c',
    identifier: 'idol-tsubaki',
    locales: [
      {
        lang: 'ja',
        name: '江上椿',
        description: '私今までカメラは向けるものでしたけど､向けられるとこんなに熱くなるんですね…！',
      },
      { lang: 'en', name: 'Tsubaki Egami', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvocagcs2c',
    identifier: 'idol-misaki',
    locales: [
      { lang: 'ja', name: '衛藤美紗希', description: '今まで上げてきた女子力、見せつけちゃうねぇ !' },
      { lang: 'en', name: 'Misaki Etou', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvohcgv22c',
    identifier: 'idol-naho',
    locales: [
      { lang: 'ja', name: '海老原菜帆', description: 'みんなの気持ちを、ぷにっと包み込んじゃいますから～' },
      { lang: 'en', name: 'Naho Ebihara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvom5zfk2c',
    identifier: 'idol-shizuku',
    locales: [
      { lang: 'ja', name: '及川雫', description: '特技は搾乳とトラクターの運転です。牛さんってカワイイですよねー' },
      { lang: 'en', name: 'Shizuku Oikawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvoqynnc2c',
    identifier: 'idol-izumi',
    locales: [
      { lang: 'ja', name: '大石泉', description: 'プログラミングなら力になれると思うけど' },
      { lang: 'en', name: 'Izumi Ohishi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvovt7wk2c',
    identifier: 'idol-yuu',
    locales: [
      { lang: 'ja', name: '太田優', description: 'ごめ～ん待って☆アッキーふかふかタイム中～♪' },
      { lang: 'en', name: 'Yuu Ohta', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvp2nmec2c',
    identifier: 'idol-yui',
    locales: [
      { lang: 'ja', name: '大槻唯', description: 'ゆい、楽しいこと大好き ! 楽しいことをくれる人も大好き ! あはっ♪' },
      { lang: 'en', name: 'Yui Ohtsuki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-0a'],
  },
  {
    rkey: '3mcjvp7kiuk2c',
    identifier: 'idol-yuriko',
    locales: [
      { lang: 'ja', name: '大西由里子', description: 'ユリユリ沼に引きずり……ゴホン！みんなを夢中にさせちゃうじぇ♪' },
      { lang: 'en', name: 'Yuriko Ohnishi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvpefoos2c',
    identifier: 'idol-kurumi',
    locales: [
      { lang: 'ja', name: '大沼くるみ', description: 'くるみが泣きやむまで、そばにいてほしいのぉ…ぐすっ…' },
      { lang: 'en', name: 'Kurumi Ohnuma', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvpjaskk2c',
    identifier: 'idol-michiru',
    locales: [
      { lang: 'ja', name: '大原みちる', description: 'パン ! つまり幸せ ! いただきまーすっ !' },
      { lang: 'en', name: 'Michiru Ohara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvpo3jq22c',
    identifier: 'idol-yasuha',
    locales: [
      { lang: 'ja', name: '岡崎泰葉', description: '子どもの頃からずっと芸能界で生きてきました。心得てますよ' },
      { lang: 'en', name: 'Yasuha Okazaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-0a'],
  },
  {
    rkey: '3mcjvpswko22c',
    identifier: 'idol-chieri',
    locales: [
      { lang: 'ja', name: '緒方智絵里', description: '四つ葉のクローバーにかけたお願い…早く叶うといいなぁ…' },
      { lang: 'en', name: 'Chieri Ogata', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvpxs7522c',
    identifier: 'idol-saori',
    locales: [
      { lang: 'ja', name: '奥山沙織', description: 'わだす、本当にアイドルになったんだ…夢みたい' },
      { lang: 'en', name: 'Saori Okuyama', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvq4oqvk2c',
    identifier: 'idol-yuuki',
    locales: [
      { lang: 'ja', name: '乙倉悠貴', description: 'アイドルユウキ、走りますっ！' },
      { lang: 'en', name: 'Yuuki Otokura', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-0a'],
  },
  {
    rkey: '3mcjvqbjquc2c',
    identifier: 'idol-sanae',
    locales: [
      { lang: 'ja', name: '片桐早苗', description: '早くアイドルにしてくれないと、現行犯逮捕しちゃうぞっ♪' },
      { lang: 'en', name: 'Sanae Katagiri', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-1ka'],
  },
  {
    rkey: '3mcjvqggmfc2c',
    identifier: 'idol-haruna',
    locales: [
      { lang: 'ja', name: '上条春菜', description: 'レンズ越しの世界は、いつも感動を与えてくれます。ナイス眼鏡 ！' },
      { lang: 'en', name: 'Haruna Kamijo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvqlbu622c',
    identifier: 'idol-nao',
    locales: [
      { lang: 'ja', name: '神谷奈緒', description: 'みんなーっ！虹を見せてくれて、ありがとーっ！' },
      { lang: 'en', name: 'Nao Kamiya', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvqq4t5k2c',
    identifier: 'idol-mizuki',
    locales: [
      {
        lang: 'ja',
        name: '川島瑞樹',
        description: 'ねぇ、元アナウンサーの私だって、アイドルを目指してもいいと思わない？',
      },
      { lang: 'en', name: 'Mizuki Kawashima', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvquzhts2c',
    identifier: 'idol-ranko',
    locales: [
      { lang: 'ja', name: '神崎蘭子', description: '闇に飲まれよ！（お疲れ様です！）' },
      { lang: 'en', name: 'Ranko Kanzaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvqzulpk2c',
    identifier: 'idol-ayaka',
    locales: [
      { lang: 'ja', name: '岸部彩華', description: '今日のあやか、すっごい盛れてて超キレイでしょ～' },
      { lang: 'en', name: 'Ayaka Kishibe', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvr6osbs2c',
    identifier: 'idol-mahiro',
    locales: [
      { lang: 'ja', name: '北川真尋', description: 'ま、ついてきてよ！ダッシュなら自信あるからさ！' },
      { lang: 'en', name: 'Mahiro Kitagawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-1ka'],
  },
  {
    rkey: '3mcjvrdkesc2c',
    identifier: 'idol-hinako',
    locales: [
      { lang: 'ja', name: '喜多日菜子', description: '日菜子の白馬の王子様はどこにいるんでしょう？むふふ…' },
      { lang: 'en', name: 'Hinako Kita', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-1ka'],
  },
  {
    rkey: '3mcjvrif6vk2c',
    identifier: 'idol-yuzu',
    locales: [
      { lang: 'ja', name: '喜多見柚', description: '柚と遊びたいひと、この指とーまれっ♪' },
      { lang: 'en', name: 'Yuzu Kitami', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-1ka'],
  },
  {
    rkey: '3mcjvrn7t5c2c',
    identifier: 'idol-manami',
    locales: [
      { lang: 'ja', name: '木場真奈美', description: '私がトップに立てないとでも？面白い冗談だな' },
      { lang: 'en', name: 'Manami Kiba', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvrs24nc2c',
    identifier: 'idol-natsuki',
    locales: [
      { lang: 'ja', name: '木村夏樹', description: 'ロックは魂の叫び、アイドルになっても目指すはロックスター !' },
      { lang: 'en', name: 'Natsuki Kimura', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-1ka'],
  },
  {
    rkey: '3mcjvrwvr4c2c',
    identifier: 'idol-cathy',
    locales: [
      { lang: 'ja', name: 'キャシー・グラハム', description: 'あたし、こーんな見た目だけど、誰より日本人なんだー♪' },
      { lang: 'en', name: 'Cathy Graham', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-1ka'],
  },
  {
    rkey: '3mcjvs3ry522c',
    identifier: 'idol-aya',
    locales: [
      { lang: 'ja', name: '桐野アヤ', description: 'アイドルにアツくぶつかっていくぜ！なんて、アイドルっぽくないか？' },
      { lang: 'en', name: 'Aya Kirino', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvsap4hc2c',
    identifier: 'idol-tsukasa',
    locales: [
      {
        lang: 'ja',
        name: '桐生つかさ',
        description: 'ギャルでJKで社長でアイドル…盛り過ぎ？ちげぇな。器がデカ過ぎんの',
      },
      { lang: 'en', name: 'Tsukasa Kiryu', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvsfjnrc2c',
    identifier: 'idol-wakaba',
    locales: [
      { lang: 'ja', name: '日下部若葉', description: '私、これでも二十歳なんですけど！立派な大人ですよっ！' },
      { lang: 'en', name: 'Wakaba Kusakabe', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvskfcac2c',
    identifier: 'idol-shinobu',
    locales: [
      { lang: 'ja', name: '工藤忍', description: '努力なら誰にも負けないからっ！' },
      { lang: 'en', name: 'Shinobu Kudo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvspa3ec2c',
    identifier: 'idol-clarice',
    locales: [
      { lang: 'ja', name: 'クラリス', description: 'これはきっと主から私たちへの、祝福なのですね' },
      { lang: 'en', name: 'Clarice', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvsu2tj22c',
    identifier: 'idol-nene',
    locales: [
      { lang: 'ja', name: '栗原ネネ', description: '妹のためにも、アイドルに…あ、いえ…自分の憧れも、です' },
      { lang: 'en', name: 'Nene Kurihara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvsyw4b22c',
    identifier: 'idol-chiaki',
    locales: [
      { lang: 'ja', name: '黒川千秋', description: '黒川千秋。アイドルをやるからにはトップを目指していくわ' },
      { lang: 'en', name: 'Chiaki Kurokawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvt5qycs2c',
    identifier: 'idol-chitose',
    locales: [
      { lang: 'ja', name: '黒埼ちとせ', description: 'どんな人であっても魅了して、永遠の僕にしてあげる' },
      { lang: 'en', name: 'Chitose Kurosaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvtclllc2c',
    identifier: 'idol-kate',
    locales: [
      { lang: 'ja', name: 'ケイト', description: 'Ｈｏｔなハートに国境はありマセン！' },
      { lang: 'en', name: 'Kate', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvthica22c',
    identifier: 'idol-koharu',
    locales: [
      { lang: 'ja', name: '古賀小春', description: 'かわいいお姫様になりたいなぁって。なれますかぁ？' },
      { lang: 'en', name: 'Koharu Koga', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvtmde5c2c',
    identifier: 'idol-sachiko',
    locales: [
      { lang: 'ja', name: '輿水幸子', description: 'ああ…ボクってホント、カワイイですよねぇ…ふふーん♪' },
      { lang: 'en', name: 'Sachiko Koshimizu', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvtr6mvc2c',
    identifier: 'idol-reina',
    locales: [
      { lang: 'ja', name: '小関麗奈', description: 'モットーは一日一善ならぬ一日一悪！レイナサマだもの、当然よね' },
      { lang: 'en', name: 'Reina Koseki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-1ka'],
  },
  {
    rkey: '3mcjvtw3ejc2c',
    identifier: 'idol-sae',
    locales: [
      {
        lang: 'ja',
        name: '小早川紗枝',
        description: '京都生まれの京都育ち。の～んびりした感じやけど、れっきとした京女どすー',
      },
      { lang: 'en', name: 'Sae Kobayakawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvu2vzqc2c',
    identifier: 'idol-miho',
    locales: [
      { lang: 'ja', name: '小日向美穂', description: '私やりますっ。熊本の女は、我慢強くて強気なんですっ' },
      { lang: 'en', name: 'Miho Kohinata', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-1ka'],
  },
  {
    rkey: '3mcjvu7r3nk2c',
    identifier: 'idol-ibuki',
    locales: [
      { lang: 'ja', name: '小松伊吹', description: '夢は大きく！ワールドワイドなダンスバカアイドルってどうかな？' },
      { lang: 'en', name: 'Ibuki Komatsu', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-1ka'],
  },
  {
    rkey: '3mcjvuemhdc2c',
    identifier: 'idol-chinami',
    locales: [
      {
        lang: 'ja',
        name: '小室千奈美',
        description: '小室千奈美よ。私を変えるって本気で言ってる？あなたにできるのかしら？',
      },
      { lang: 'en', name: 'Chinami Komuro', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-1ka'],
  },
  {
    rkey: '3mcjvujhgcs2c',
    identifier: 'idol-kotoka',
    locales: [
      {
        lang: 'ja',
        name: '西園寺琴歌',
        description: '自らの手で思いを込めた花を贈る、前向きなアイドルになりたいですわ',
      },
      { lang: 'en', name: 'Kotoka Saionji', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvuocqzc2c',
    identifier: 'idol-tokiko',
    locales: [
      { lang: 'ja', name: '財前時子', description: 'アァン？' },
      { lang: 'en', name: 'Tokiko Zaizen', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'undefined'],
  },
  {
    rkey: '3mcjvut7gos2c',
    identifier: 'idol-yoko',
    locales: [
      { lang: 'ja', name: '斉藤洋子', description: 'どうです、プロデューサー？私の健康美肌！' },
      { lang: 'en', name: 'Yoko Saito', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-2sa'],
  },
  {
    rkey: '3mcjvuy2dps2c',
    identifier: 'idol-kiyomi',
    locales: [
      { lang: 'ja', name: '冴島清美', description: '超☆アイドル、始めてみましょう！清く正しく美しく！' },
      { lang: 'en', name: 'Kiyomi Saejima', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-2sa'],
  },
  {
    rkey: '3mcjvv4ur4s2c',
    identifier: 'idol-satomi',
    locales: [
      { lang: 'ja', name: '榊原里美', description: '高級ハチミツに、お砂糖をひとつかみ…ネロネロシロップの完成です～♪' },
      { lang: 'en', name: 'Satomi Sakakibara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvvbpdg22c',
    identifier: 'idol-fumika',
    locales: [
      { lang: 'ja', name: '鷺沢文香', description: '本の中だけの夢物語が…現実になった…そんな気分です…' },
      { lang: 'en', name: 'Fumika Sagisawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvvgk5jc2c',
    identifier: 'idol-mayu',
    locales: [
      { lang: 'ja', name: '佐久間まゆ', description: 'プロデューサーさんとまゆが出会ったのは運命だったんですよ' },
      { lang: 'en', name: 'Mayu Sakuma', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvvlfzsc2c',
    identifier: 'idol-momoka',
    locales: [
      { lang: 'ja', name: '櫻井桃華', description: 'どこだって花園にしてさしあげます。わたくしが咲きますわ！' },
      { lang: 'en', name: 'Momoka Sakurai', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvvqaswc2c',
    identifier: 'idol-chie',
    locales: [
      { lang: 'ja', name: '佐々木千枝', description: '早くオトナっぽいステキなアイドルになりたいです！' },
      { lang: 'en', name: 'Chie Sasaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvvv3ws22c',
    identifier: 'idol-yukimi',
    locales: [
      { lang: 'ja', name: '佐城雪美', description: '……あなた…特別……ペロ…特別……どっちも……私の……宝物……' },
      { lang: 'en', name: 'Yukimi Sajo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvvzwe722c',
    identifier: 'idol-shin',
    locales: [
      { lang: 'ja', name: '佐藤心', description: 'はぁとはとってもスウィーティー♪意味？考えるなって☆感じろ☆' },
      { lang: 'en', name: 'Shin Sato', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-2sa'],
  },
  {
    rkey: '3mcjvw6r7bk2c',
    identifier: 'idol-marina',
    locales: [
      { lang: 'ja', name: '沢田麻理菜', description: 'サーフィンのことなら、私になんでも聞いてね' },
      { lang: 'en', name: 'Marina Sawada', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-2sa'],
  },
  {
    rkey: '3mcjvwdnbg22c',
    identifier: 'idol-noriko',
    locales: [
      { lang: 'ja', name: '椎名法子', description: 'おなかが空いたら、パクッとドーナツ♪' },
      { lang: 'en', name: 'Noriko Shiina', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvwihylk2c',
    identifier: 'idol-syuko',
    locales: [
      { lang: 'ja', name: '塩見周子', description: '今日もよろしゅーこー。あ、コレ、流行らせようと思って' },
      { lang: 'en', name: 'Syuko Shiomi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvwndbdk2c',
    identifier: 'idol-rei',
    locales: [
      { lang: 'ja', name: '篠原礼', description: 'お姉さんを退屈させちゃダメよ、プロデューサー君' },
      { lang: 'en', name: 'Rei Shinohara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvws7jdk2c',
    identifier: 'idol-rin',
    locales: [
      { lang: 'ja', name: '渋谷凛', description: 'ふーん、アンタが私のプロデューサー？' },
      { lang: 'en', name: 'Rin Shibuya', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvwx2jcc2c',
    identifier: 'idol-uzuki',
    locales: [
      { lang: 'ja', name: '島村卯月', description: 'えへへ、今日の笑顔はとびっきりですっ♪' },
      { lang: 'en', name: 'Uzuki Shimamura', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvx3vibs2c',
    identifier: 'idol-aoi',
    locales: [
      { lang: 'ja', name: '首藤葵', description: '大分の魅力、伝えるけんね ! 残さずぜーんぶ召し上がれっ♪' },
      { lang: 'en', name: 'Aoi Shuto', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-2sa'],
  },
  {
    rkey: '3mcjvxareks2c',
    identifier: 'idol-mika',
    locales: [
      { lang: 'ja', name: '城ヶ崎美嘉', description: '目指すならナンバーワン！でしょっ★' },
      { lang: 'en', name: 'Mika Jougasaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'undefined'],
  },
  {
    rkey: '3mcjvxfnve22c',
    identifier: 'idol-rika',
    locales: [
      { lang: 'ja', name: '城ヶ崎莉嘉', description: 'オトナとコドモをどっちも武器にできるのが、カリスマJCだよ☆' },
      { lang: 'en', name: 'Rika Jougasaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'undefined'],
  },
  {
    rkey: '3mcjvxkiyak2c',
    identifier: 'idol-hotaru',
    locales: [
      { lang: 'ja', name: '白菊ほたる', description: 'このプロダクションは倒産なんかしませんよね…？' },
      { lang: 'en', name: 'Hotaru Shiragiku', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvxpfzn22c',
    identifier: 'idol-koume',
    locales: [
      { lang: 'ja', name: '白坂小梅', description: '今日はみんなで、恐怖の大合唱…だね' },
      { lang: 'en', name: 'Koume Shirasaka', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvxucans2c',
    identifier: 'idol-chiyo',
    locales: [
      { lang: 'ja', name: '白雪千夜', description: '白雪千夜。私が唯一持っているものの名前です。' },
      { lang: 'en', name: 'Chiyo Shirayuki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvxz5fis2c',
    identifier: 'idol-umi',
    locales: [
      { lang: 'ja', name: '杉坂海', description: 'プロデューサーさんが吹かせる風に乗って、ウチはどこまでも行くよ… !' },
      { lang: 'en', name: 'Umi Sugisaka', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-2sa'],
  },
  {
    rkey: '3mcjvy5zkl22c',
    identifier: 'idol-seika',
    locales: [
      { lang: 'ja', name: '涼宮星花', description: 'バイオリンは体全体で奏でるもの。髪を躍らせ、心を弾ませて…' },
      { lang: 'en', name: 'Seika Suzumiya', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvyd2d422c',
    identifier: 'idol-akira',
    locales: [
      { lang: 'ja', name: '砂塚あきら', description: '＃今日のあきらコーデ　＃サイコーの１着 って感じ！' },
      { lang: 'en', name: 'Akira Sunazuka', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvyhwn2k2c',
    identifier: 'idol-hiromi',
    locales: [
      { lang: 'ja', name: '関裕美', description: '怒ってない、怒ってないのに。いつも誤解されちゃうんだ…' },
      { lang: 'en', name: 'Hiromi Seki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-2sa'],
  },
  {
    rkey: '3mcjvymroxs2c',
    identifier: 'idol-shiori',
    locales: [
      { lang: 'ja', name: '瀬名詩織', description: '海は私の故郷…。生まれたときからそこにあったの' },
      { lang: 'en', name: 'Shiori Sena', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-2sa'],
  },
  {
    rkey: '3mcjvyrmzoc2c',
    identifier: 'idol-ema',
    locales: [
      { lang: 'ja', name: '仙崎恵磨', description: 'オナシャーッスっ！……あ？声デカい？' },
      { lang: 'en', name: 'Ema Senzaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-2sa'],
  },
  {
    rkey: '3mcjvywi2mc2c',
    identifier: 'idol-natsumi',
    locales: [
      { lang: 'ja', name: '相馬夏美', description: 'アテンションプリーズ☆' },
      { lang: 'en', name: 'Natsumi Soma', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-2sa'],
  },
  {
    rkey: '3mcjvz3dagk2c',
    identifier: 'idol-kaede',
    locales: [
      {
        lang: 'ja',
        name: '高垣楓',
        description: 'その…言いにくいことなんですけど…いいかしら。…あの…寝ぐせ、たってますよ。ふふっ',
      },
      { lang: 'en', name: 'Kaede Takagaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-3ta'],
  },
  {
    rkey: '3mcjvza6afc2c',
    identifier: 'idol-reiko',
    locales: [
      { lang: 'ja', name: '高橋礼子', description: '遅咲きの花だけど、きれいでしょう？咲き誇ってみせるわ' },
      { lang: 'en', name: 'Reiko Takahashi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-3ta'],
  },
  {
    rkey: '3mcjvzeyqq22c',
    identifier: 'idol-kako',
    locales: [
      { lang: 'ja', name: '鷹富士茄子', description: 'ナスじゃなくてカコですよ～' },
      { lang: 'en', name: 'Kako Takafuji', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-3ta'],
  },
  {
    rkey: '3mcjvzjt2a22c',
    identifier: 'idol-noa',
    locales: [
      { lang: 'ja', name: '高峯のあ', description: 'アイドル…。単なる歌い手とも俳優とも違う。抽象的で、象徴的…' },
      { lang: 'en', name: 'Noa Takamine', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-3ta'],
  },
  {
    rkey: '3mcjvzop6d22c',
    identifier: 'idol-aiko',
    locales: [
      { lang: 'ja', name: '高森藍子', description: 'みなさん、てのひらの幸せ、持って帰ってください♪' },
      { lang: 'en', name: 'Aiko Takamori', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-3ta'],
  },
  {
    rkey: '3mcjvztjwhs2c',
    identifier: 'idol-riina',
    locales: [
      { lang: 'ja', name: '多田李衣菜', description: 'イェーイ ! みんなー、ロックしてるー？' },
      { lang: 'en', name: 'Riina Tada', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-3ta'],
  },
  {
    rkey: '3mcjvzyepls2c',
    identifier: 'idol-arisu',
    locales: [
      { lang: 'ja', name: '橘ありす', description: '橘…橘ありすです。橘と呼んでください' },
      { lang: 'en', name: 'Arisu Tachibana', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-3ta'],
  },
  {
    rkey: '3mcjw257bv22c',
    identifier: 'idol-miyabi',
    locales: [
      {
        lang: 'ja',
        name: '月宮雅',
        description: 'アイドルのことはよくわかんないけど…ママが喜んでくれるし頑張っちゃお～ !',
      },
      { lang: 'en', name: 'Miyabi Tsukimiya', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-3ta'],
  },
  {
    rkey: '3mcjw2c2pjc2c',
    identifier: 'idol-akari',
    locales: [
      { lang: 'ja', name: '辻野あかり', description: 'りんごアイドル、あかりんごこと辻野あかりで～す♪' },
      { lang: 'en', name: 'Akari Tsujino', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-3ta'],
  },
  {
    rkey: '3mcjw2h2jrk2c',
    identifier: 'idol-ako',
    locales: [
      { lang: 'ja', name: '土屋亜子', description: '目標はがっぽり一獲千金ってことで、シクヨロ！' },
      { lang: 'en', name: 'Ako Tsuchiya', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-3ta'],
  },
  {
    rkey: '3mcjw2lw3cs2c',
    identifier: 'idol-ai',
    locales: [
      { lang: 'ja', name: '東郷あい', description: '私が淹れたコーヒーを、君に飲んでもらいたくってね' },
      { lang: 'en', name: 'Ai Togo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-3ta'],
  },
  {
    rkey: '3mcjw2qre2s2c',
    identifier: 'idol-karin',
    locales: [
      { lang: 'ja', name: '道明寺歌鈴', description: 'よろしゅくお願いしま…。あ、噛…噛みましゅたっ' },
      { lang: 'en', name: 'Karin Domyoji', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'undefined'],
  },
  {
    rkey: '3mcjw2vmjv22c',
    identifier: 'idol-airi',
    locales: [
      { lang: 'ja', name: '十時愛梨', description: 'ふぅ、暑い…。ちょっとくらい、涼しい格好をしてもいいですよね' },
      { lang: 'en', name: 'Airi Totoki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-3ta'],
  },
  {
    rkey: '3mcjw32h55k2c',
    identifier: 'idol-hasumi',
    locales: [
      { lang: 'ja', name: '長富蓮実', description: '走り出しますよ。アイドルとして…。追い風を、お願いしますね' },
      { lang: 'en', name: 'Hasumi Nagatomi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-4na'],
  },
  {
    rkey: '3mcjw37f5s22c',
    identifier: 'idol-yuka',
    locales: [
      { lang: 'ja', name: '中野有香', description: 'アイドル白帯ですけど…お願いします。押忍 !' },
      { lang: 'en', name: 'Yuka Nakano', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-4na'],
  },
  {
    rkey: '3mcjw3e7r2k2c',
    identifier: 'idol-natalia',
    locales: [
      { lang: 'ja', name: 'ナターリア', description: 'アイドルはブラジルでも人気♪『コキョーにニシキをカザル』ゾ～！' },
      { lang: 'en', name: 'Natalia', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-4na'],
  },
  {
    rkey: '3mcjw3j2dds2c',
    identifier: 'idol-meiko',
    locales: [
      { lang: 'ja', name: '並木芽衣子', description: 'ほら、行こう！新しい旅と世界が、私たちを待ってるよっ♪' },
      { lang: 'en', name: 'Meiko Namiki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-4na'],
  },
  {
    rkey: '3mcjw3nwzyk2c',
    identifier: 'idol-yume',
    locales: [
      {
        lang: 'ja',
        name: '成宮由愛',
        description: 'スケッチブックに描き切れないほどの景色、これからもたくさん、見に行きましょうね',
      },
      { lang: 'en', name: 'Yume Narumiya', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-4na'],
  },
  {
    rkey: '3mcjw3stitc2c',
    identifier: 'idol-hikaru',
    locales: [
      { lang: 'ja', name: '南条光', description: '闇打ち払う正義の光！ヒーローアイドル南条光、ただいま参上！' },
      { lang: 'en', name: 'Hikaru Nanjo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-4na'],
  },
  {
    rkey: '3mcjw3xo34k2c',
    identifier: 'idol-emi',
    locales: [
      { lang: 'ja', name: '難波笑美', description: 'このタコちゃんかわいいやろ～？ごっつ好きやね～ん♪' },
      { lang: 'en', name: 'Emi Namba', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-4na'],
  },
  {
    rkey: '3mcjw44iuak2c',
    identifier: 'idol-honami',
    locales: [
      {
        lang: 'ja',
        name: '西川保奈美',
        description: 'オペラと、アイドルの歌。両方歌いこなせなきゃ、自分に納得できないわ',
      },
      { lang: 'en', name: 'Honami Nishikawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-4na'],
  },
  {
    rkey: '3mcjw4bdrbk2c',
    identifier: 'idol-kai',
    locales: [
      { lang: 'ja', name: '西島櫂', description: '水泳以上の青春をくれるっていうの？じゃあ、ちゃんとアップしないとね' },
      { lang: 'en', name: 'Kai Nishijima', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-4na'],
  },
  {
    rkey: '3mcjw4g74xc2c',
    identifier: 'idol-minami',
    locales: [
      { lang: 'ja', name: '新田美波', description: 'みなみ、いきますっ !' },
      { lang: 'en', name: 'Minami Nitta', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-4na'],
  },
  {
    rkey: '3mcjw4kzs6c2c',
    identifier: 'idol-asuka',
    locales: [
      { lang: 'ja', name: '二宮飛鳥', description: 'さぁ、キミとボクのセカイを見せつけにいこうか……！' },
      { lang: 'en', name: 'Asuka Ninomiya', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-4na'],
  },
  {
    rkey: '3mcjw4pvfo22c',
    identifier: 'idol-hitomi',
    locales: [
      { lang: 'ja', name: '丹羽仁美', description: 'アイドル界一の傾奇者になる！' },
      { lang: 'en', name: 'Hitomi Niwa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-4na'],
  },
  {
    rkey: '3mcjw4uqdoc2c',
    identifier: 'idol-sora',
    locales: [
      { lang: 'ja', name: '野々村そら', description: 'みんなすまいる！みーんなはっぴー！わんだふるはっぴーわーるど☆' },
      { lang: 'en', name: 'Sora Nonomura', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-4na'],
  },
  {
    rkey: '3mcjw4zlkhs2c',
    identifier: 'idol-toko',
    locales: [
      { lang: 'ja', name: '服部瞳子', description: '憧れた世界に、戻れただけじゃない。今の私は、もっと先にいるのね' },
      { lang: 'en', name: 'Toko Hattori', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjw56godk2c',
    identifier: 'idol-ayuna',
    locales: [
      { lang: 'ja', name: '浜川愛結奈', description: '手綱は預けるから、乗りこなしてみて' },
      { lang: 'en', name: 'Ayuna Hamakawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-5ha'],
  },
  {
    rkey: '3mcjw5dcer22c',
    identifier: 'idol-ayame',
    locales: [
      { lang: 'ja', name: '浜口あやめ', description: 'ふふふ…この姿のわたくしを、誰も忍者だとは思いますまい！' },
      { lang: 'en', name: 'Ayame Hamaguchi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-5ha'],
  },
  {
    rkey: '3mcjw5i53wk2c',
    identifier: 'idol-mirei',
    locales: [
      { lang: 'ja', name: '早坂美玲', description: 'ウチは一匹狼だモン！ひっかくぞッ！' },
      { lang: 'en', name: 'Mirei Hayasaka', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-5ha'],
  },
  {
    rkey: '3mcjw5mzvj22c',
    identifier: 'idol-kanade',
    locales: [
      { lang: 'ja', name: '速水奏', description: '唇はね、嘘をつくためにあるのよ' },
      { lang: 'en', name: 'Kanade Hayami', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjw5rviys2c',
    identifier: 'idol-miyo',
    locales: [
      { lang: 'ja', name: '原田美世', description: 'ファンのみんなを助手席にご招待！スピード全開でいくよー！' },
      { lang: 'en', name: 'Miyo Harada', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-5ha'],
  },
  {
    rkey: '3mcjw5wq4bc2c',
    identifier: 'idol-shino',
    locales: [
      { lang: 'ja', name: '柊志乃', description: '乾杯しましょうか。ほら、理由なんて何でもいいでしょう？' },
      { lang: 'en', name: 'Shino Hiiragi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjw63mg7s2c',
    identifier: 'idol-nagi',
    locales: [
      { lang: 'ja', name: '久川凪', description: '凪です。ネギではありません' },
      { lang: 'en', name: 'Nagi Hisakawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-5ha'],
  },
  {
    rkey: '3mcjw6ah3gs2c',
    identifier: 'idol-hayate',
    locales: [
      { lang: 'ja', name: '久川颯', description: '定期的に褒めてね ! そのぶん伸びるから、はーは !' },
      { lang: 'en', name: 'Hayate Hisakawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjw6fdvyk2c',
    identifier: 'idol-akane',
    locales: [
      { lang: 'ja', name: '日野茜', description: 'うううう～～～、ボンバーーーーーーーっ！！' },
      { lang: 'en', name: 'Akane Hino', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-5ha'],
  },
  {
    rkey: '3mcjw6k6yv22c',
    identifier: 'idol-yuki',
    locales: [
      { lang: 'ja', name: '姫川友紀', description: 'ステージの上は、いつだってフルスイングだよっ' },
      { lang: 'en', name: 'Yuki Himekawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-5ha'],
  },
  {
    rkey: '3mcjw6ozvw22c',
    identifier: 'idol-rena',
    locales: [
      { lang: 'ja', name: '兵藤レナ', description: '大きなものを賭けて本気でやるからこそ、勝負は面白いの' },
      { lang: 'en', name: 'Rena Hyodo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-5ha'],
  },
  {
    rkey: '3mcjw6tup222c',
    identifier: 'idol-mai',
    locales: [
      { lang: 'ja', name: '福山舞', description: 'おはようございます、プロデューサー♪福山舞、10歳ですっ！' },
      { lang: 'en', name: 'Mai Fukuyama', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-5ha'],
  },
  {
    rkey: '3mcjw6ypzqk2c',
    identifier: 'idol-tomo',
    locales: [
      {
        lang: 'ja',
        name: '藤居朋',
        description: 'アイドルってすごいわよね。占いみたいに、みんなの支えになれるんだもん',
      },
      { lang: 'en', name: 'Tomo Fujii', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjw75n3522c',
    identifier: 'idol-rina',
    locales: [
      { lang: 'ja', name: '藤本里奈', description: 'どうも～、里奈ぽよ～。とりま、よろ～' },
      { lang: 'en', name: 'Rina Fujimoto', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-5ha'],
  },
  {
    rkey: '3mcjw7cjou22c',
    identifier: 'idol-hajime',
    locales: [
      { lang: 'ja', name: '藤原肇', description: '備前の陶芸は日本一ですからね' },
      { lang: 'en', name: 'Hajime Fujiwara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjw7hemuc2c',
    identifier: 'idol-anzu',
    locales: [
      { lang: 'ja', name: '双葉杏', description: '杏、週休8日を希望しま～す' },
      { lang: 'en', name: 'Anzu Futaba', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-5ha'],
  },
  {
    rkey: '3mcjw7macck2c',
    identifier: 'idol-yoriko',
    locales: [
      { lang: 'ja', name: '古澤頼子', description: 'まるで絵画の世界のよう…。やはり、華やかな世界…' },
      { lang: 'en', name: 'Yoriko Furusawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjw7r57s22c',
    identifier: 'idol-helen',
    locales: [
      { lang: 'ja', name: 'ヘレン', description: '見た者の世界観さえ変えてしまう…それがヘレンよ !' },
      { lang: 'en', name: 'Helen', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjw7vyen22c',
    identifier: 'idol-karen',
    locales: [
      { lang: 'ja', name: '北条加蓮', description: '証明したい。私が一番だって。私でも、一番になれるんだって' },
      { lang: 'en', name: 'Karen Hojo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-5ha'],
  },
  {
    rkey: '3mcjwa2u32k2c',
    identifier: 'idol-syoko',
    locales: [
      { lang: 'ja', name: '星輝子', description: '世界を！キノコで埋め尽くしてやるぜぇぇッハァッ！' },
      { lang: 'en', name: 'Syoko Hoshi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-5ha'],
  },
  {
    rkey: '3mcjwa7olfc2c',
    identifier: 'idol-yuko',
    locales: [
      { lang: 'ja', name: '堀裕子', description: 'ムムッ、サイキックパワー充填完了！' },
      { lang: 'en', name: 'Yuko Hori', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-5ha'],
  },
  {
    rkey: '3mcjwaelnr22c',
    identifier: 'idol-mio',
    locales: [
      { lang: 'ja', name: '本田未央', description: 'トップ・オブ・スター…輝きたいんだ！' },
      { lang: 'en', name: 'Mio Honda', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-5ha'],
  },
  {
    rkey: '3mcjwajgitk2c',
    identifier: 'idol-miku',
    locales: [
      {
        lang: 'ja',
        name: '前川みく',
        description: 'ねこみみよーし ! ねこしっぽよーし ! 可愛い衣装で、みくは準備おっけーにゃあ',
      },
      { lang: 'en', name: 'Miku Maekawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwaobwhs2c',
    identifier: 'idol-shiho',
    locales: [
      { lang: 'ja', name: '槙原志保', description: '接客スキルを生かして、アイドルも頑張っちゃいますっ♪' },
      { lang: 'en', name: 'Shiho Makihara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwat4zec2c',
    identifier: 'idol-chizuru',
    locales: [
      { lang: 'ja', name: '松尾千鶴', description: 'ハァ…考えてること、喋っちゃう癖直さないと……ハッ、き、聞いた？' },
      { lang: 'en', name: 'Chizuru Matsuo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-6ma'],
  },
  {
    rkey: '3mcjwaxya5s2c',
    identifier: 'idol-ryo',
    locales: [
      { lang: 'ja', name: '松永涼', description: 'アイドル松永涼の歌、聴かせてやるよ！今度こそ、しびれるほどなッ' },
      { lang: 'en', name: 'Ryo Matsunaga', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-6ma'],
  },
  {
    rkey: '3mcjwb4wxb22c',
    identifier: 'idol-saya',
    locales: [
      { lang: 'ja', name: '松原早耶', description: 'ぶりっ子なんてひどーい。早耶はそんなのじゃないんだから～ !' },
      { lang: 'en', name: 'Saya Matsubara', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwbbtlxc2c',
    identifier: 'idol-sarina',
    locales: [
      { lang: 'ja', name: '松本沙理奈', description: 'アタシの魅力でファンを悩殺 ! やっぱアタシはセクシー路線よね～' },
      { lang: 'en', name: 'Sarina Matsumoto', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-6ma'],
  },
  {
    rkey: '3mcjwbgo2dk2c',
    identifier: 'idol-kumiko',
    locales: [
      { lang: 'ja', name: '松山久美子', description: '見られてるって意識は女をキレイにするんですって' },
      { lang: 'en', name: 'Kumiko Matsuyama', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwbljd3k2c',
    identifier: 'idol-risa',
    locales: [
      { lang: 'ja', name: '的場梨沙', description: 'パパに喜んでもらうためにアイドルになるの !' },
      { lang: 'en', name: 'Risa Matoba', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwbqec322c',
    identifier: 'idol-misato',
    locales: [
      { lang: 'ja', name: '間中美里', description: 'いつもアナタのまんなかに♪間中美里でぇす♪' },
      { lang: 'en', name: 'Misato Manaka', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwbv6rgk2c',
    identifier: 'idol-itsuki',
    locales: [
      {
        lang: 'ja',
        name: '真鍋いつき',
        description: '色々話したいことはありますけど…まず運動ですね！運動しましょう！',
      },
      { lang: 'en', name: 'Itsuki Manabe', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwbzzxas2c',
    identifier: 'idol-seira',
    locales: [
      { lang: 'ja', name: '水木聖來', description: 'ダンスは誰にも負けたくないな。勝負してもいいよ？' },
      { lang: 'en', name: 'Seira Mizuki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-6ma'],
  },
  {
    rkey: '3mcjwc6wi222c',
    identifier: 'idol-midori',
    locales: [
      { lang: 'ja', name: '水野翠', description: '私にとってこの矢は､夢を射止める誓いの象徴' },
      { lang: 'en', name: 'Midori Mizuno', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-6ma'],
  },
  {
    rkey: '3mcjwcdssxs2c',
    identifier: 'idol-yukari',
    locales: [
      { lang: 'ja', name: '水本ゆかり', description: 'フルートだけでなく、アイドルとしての音色も深めたいと思います' },
      { lang: 'en', name: 'Yukari Mizumoto', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwcinh7k2c',
    identifier: 'idol-miyu',
    locales: [
      { lang: 'ja', name: '三船美優', description: '流されてばかりはダメ、なのに…' },
      { lang: 'en', name: 'Miyu Mifune', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-6ma'],
  },
  {
    rkey: '3mcjwcni4gk2c',
    identifier: 'idol-kanako',
    locales: [
      {
        lang: 'ja',
        name: '三村かな子',
        description: '食べてくれる人の笑顔を思い浮かべて作るお菓子は、とびきりおいしくなるんです',
      },
      { lang: 'en', name: 'Kanako Mimura', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwcsciuc2c',
    identifier: 'idol-frederica',
    locales: [
      { lang: 'ja', name: '宮本フレデリカ', description: 'フンフンフフーン、フレデリカー♪' },
      { lang: 'en', name: 'Frederica Miyamoto', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwcx4wbc2c',
    identifier: 'idol-sana',
    locales: [
      { lang: 'ja', name: '三好紗南', description: '今日のあたしは無敵モードで全クリしちゃうね！' },
      { lang: 'en', name: 'Sana Miyoshi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwd3xvas2c',
    identifier: 'idol-takumi',
    locales: [
      { lang: 'ja', name: '向井拓海', description: '向井拓海だ ! 夜露士苦ゥ ! !' },
      { lang: 'en', name: 'Takumi Mukai', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwdasmgc2c',
    identifier: 'idol-atsumi',
    locales: [
      { lang: 'ja', name: '棟方愛海', description: 'たくさんのお山を、この手で掴みにいこうっ！' },
      { lang: 'en', name: 'Atsumi Munakata', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwdfn5qc2c',
    identifier: 'idol-tomoe',
    locales: [
      { lang: 'ja', name: '村上巴', description: 'うちの魂を込めた歌、聞いてけやーっ !' },
      { lang: 'en', name: 'Tomoe Murakami', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwdkhl5c2c',
    identifier: 'idol-sakura',
    locales: [
      { lang: 'ja', name: '村松さくら', description: 'さくらでぇす♪えっへへー♪' },
      { lang: 'en', name: 'Sakura Muramatsu', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwdpcaec2c',
    identifier: 'idol-mary',
    locales: [
      {
        lang: 'ja',
        name: 'メアリー・コクラン',
        description: 'ダーリンにお似合いのレディになるためにアタシは日々がんばるのヨ♪',
      },
      { lang: 'en', name: 'Mary Cochran', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwdu53gs2c',
    identifier: 'idol-arisa',
    locales: [
      {
        lang: 'ja',
        name: '持田亜里沙',
        description: 'ウサコちゃんと一緒ならみーんなと、お友だちになれちゃうんですっ！',
      },
      { lang: 'en', name: 'Arisa Mochida', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwdyynxc2c',
    identifier: 'idol-hijiri',
    locales: [
      { lang: 'ja', name: '望月聖', description: 'あなたは……わたしの歌、聞いてくれますか……？' },
      { lang: 'en', name: 'Hijiri Mochizuki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-6ma'],
  },
  {
    rkey: '3mcjwe5up4k2c',
    identifier: 'idol-azuki',
    locales: [
      { lang: 'ja', name: '桃井あずき', description: 'あずきのアイドルデビュー大作戦！名付けてプロジェクトA！' },
      { lang: 'en', name: 'Azuki Momoi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-6ma'],
  },
  {
    rkey: '3mcjwecqrb22c',
    identifier: 'idol-nono',
    locales: [
      { lang: 'ja', name: '森久保乃々', description: 'アイドルとか…むーりぃー…' },
      { lang: 'en', name: 'Nono Morikubo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-6ma'],
  },
  {
    rkey: '3mcjwehlhhc2c',
    identifier: 'idol-kirari',
    locales: [
      {
        lang: 'ja',
        name: '諸星きらり',
        description: 'にゃっほーい ! きらりだよ☆かわいいものやハピハピなもの、だーい好き !',
      },
      { lang: 'en', name: 'Kirari Moroboshi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-6ma'],
  },
  {
    rkey: '3mcjwemhoi22c',
    identifier: 'idol-fueifuei',
    locales: [
      { lang: 'ja', name: '楊菲菲', description: '香港からやってきマシタ！ふぇいふぇいダヨー！ヨロシクー' },
      { lang: 'en', name: 'Yao Fueifuei', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-7ya'],
  },
  {
    rkey: '3mcjwerc2vs2c',
    identifier: 'idol-makino',
    locales: [
      { lang: 'ja', name: '八神マキノ', description: 'アイドルと、貴方という調査対象……フフ、実に興味深いわ' },
      { lang: 'en', name: 'Makino Yagami', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-7ya'],
  },
  {
    rkey: '3mcjwew5sck2c',
    identifier: 'idol-miu',
    locales: [
      { lang: 'ja', name: '矢口美羽', description: 'は、跳ねますっ！みうさぎピョーンピョン♪' },
      { lang: 'en', name: 'Miu Yaguchi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-7ya'],
  },
  {
    rkey: '3mcjwf2y5r22c',
    identifier: 'idol-kiyora',
    locales: [
      { lang: 'ja', name: '柳清良', description: 'ナースの経験を生かして、ファンを癒せるアイドルに' },
      { lang: 'en', name: 'Kiyora Yanagi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-7ya'],
  },
  {
    rkey: '3mcjwf7t3rc2c',
    identifier: 'idol-miyuki',
    locales: [
      { lang: 'ja', name: '柳瀬美由紀', description: '元気にピース♪カニと一緒にピースピース♪' },
      { lang: 'en', name: 'Miyuki Yanase', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-7ya'],
  },
  {
    rkey: '3mcjwfepeqk2c',
    identifier: 'idol-aki',
    locales: [
      { lang: 'ja', name: '大和亜季', description: '大和亜季……しゅつげーきっ！！' },
      { lang: 'en', name: 'Aki Yamato', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-7ya'],
  },
  {
    rkey: '3mcjwfjk3w22c',
    identifier: 'idol-haru',
    locales: [
      { lang: 'ja', name: '結城晴', description: 'オレには憧れがある。カッコ悪いゴールはいらないぜ !' },
      { lang: 'en', name: 'Haru Yuuki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-7ya'],
  },
  {
    rkey: '3mcjwfojkhc2c',
    identifier: 'idol-kozue',
    locales: [
      { lang: 'ja', name: '遊佐こずえ', description: 'あいどるってなにー…？こずえがやるのー？ふぅーん' },
      { lang: 'en', name: 'Kozue Yusa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-7ya'],
  },
  {
    rkey: '3mcjwfteank2c',
    identifier: 'idol-riamu',
    locales: [
      { lang: 'ja', name: '夢見りあむ', description: 'オタク！ぼくをすこれ！よ！' },
      { lang: 'en', name: 'Riamu Yumemi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-7ya'],
  },
  {
    rkey: '3mcjwfyawd22c',
    identifier: 'idol-chika',
    locales: [
      { lang: 'ja', name: '横山千佳', description: 'さあ、手をつないで♪ラブリーチカと一緒に行っくよ～っ！' },
      { lang: 'en', name: 'Chika Yokoyama', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute', 'idol-7ya'],
  },
  {
    rkey: '3mcjwg563mk2c',
    identifier: 'idol-saki',
    locales: [
      { lang: 'ja', name: '吉岡沙紀', description: 'このステージに相応しいアタシとアートを、魅せていくっすよ…！' },
      { lang: 'en', name: 'Saki Yoshioka', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-7ya'],
  },
  {
    rkey: '3mcjwgc2sbc2c',
    identifier: 'idol-yoshino',
    locales: [
      { lang: 'ja', name: '依田芳乃', description: 'よき人を求めてお困りでしょうー？そなたのお力になれるなら喜んでー' },
      { lang: 'en', name: 'Yoshino Yorita', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-7ya'],
  },
  {
    rkey: '3mcjwggvsa22c',
    identifier: 'idol-layla',
    locales: [
      {
        lang: 'ja',
        name: 'ライラ',
        description: 'ライラさんはライラさんと言いまして、生まれはアラブのドバイなのでございますです',
      },
      { lang: 'en', name: 'Layla', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-8ra'],
  },
  {
    rkey: '3mcjwglqt622c',
    identifier: 'idol-kaoru',
    locales: [
      { lang: 'ja', name: '龍崎薫', description: 'せんせぇー ! おっはようございまー ! きょうもがんばりまーっ !' },
      { lang: 'en', name: 'Kaoru Ryuzaki', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-8ra'],
  },
  {
    rkey: '3mcjwgqmqgc2c',
    identifier: 'idol-tomoka',
    locales: [
      {
        lang: 'ja',
        name: '若林智香',
        description: 'ＧＯ　ＦＩＧＨＴ　ＷＩＮ！ＪＵＳＴ　ＤＯ　ＩＴ！もっともっと！できるよーっ！！',
      },
      { lang: 'en', name: 'Tomoka Wakabayashi', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion', 'idol-9wa'],
  },
  {
    rkey: '3mcjwgvidw22c',
    identifier: 'idol-tamami',
    locales: [
      { lang: 'ja', name: '脇山珠美', description: '剣の道とアイドルの道、二刀流を極めてみせますっ！' },
      { lang: 'en', name: 'Tamami Wakiyama', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-9wa'],
  },
  {
    rkey: '3mcjwh2d24c2c',
    identifier: 'idol-rumi',
    locales: [
      { lang: 'ja', name: '和久井留美', description: 'もう一度、「仕事が趣味です」と笑ってみせるわ' },
      { lang: 'en', name: 'Rumi Wakui', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool', 'idol-9wa'],
  },
  {
    rkey: '3mcjwh7bigc2c',
    identifier: 'staff-chihiro',
    locales: [
      { lang: 'ja', name: '千川ちひろ', description: '' },
      { lang: 'en', name: 'Chihiro Senkawa', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
  },
  {
    rkey: '3mcjwhe4ggk2c',
    identifier: 'kr-yujin',
    locales: [
      { lang: 'kr', name: '임유진', description: '' },
      { lang: 'ja', name: 'イム・ユジン', description: '' },
      { lang: 'en', name: 'Yujin Im', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-passion'],
  },
  {
    rkey: '3mcjwhiyar22c',
    identifier: 'kr-haena',
    locales: [
      { lang: 'kr', name: '류해나', description: '' },
      { lang: 'ja', name: 'リュ・ヘナ', description: '' },
      { lang: 'en', name: 'Haena Ryoo', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cute'],
  },
  {
    rkey: '3mcjwhnv4c22c',
    identifier: 'kr-juney',
    locales: [
      { lang: 'kr', name: '주니', description: '' },
      { lang: 'ja', name: 'ジュニー', description: '' },
      { lang: 'en', name: 'Juney', description: '' },
    ],
    targetHandle: TARGET_HANDLE,
    feedShortNames: ['idol-cool'],
  },
];
