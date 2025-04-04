const config = require("../config");
const {
  cmd,
  commands
} = require('../command');
const axios = require('axios');
const sharp = require("sharp");
const download = require('../lib/yts');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const fetch = (..._0x376d55) => import("node-fetch").then(({
  default: _0x51b587
}) => _0x51b587(..._0x376d55));
const {
  Buffer
} = require('buffer');
const cinesubz_tv = require('sadasytsearch');
const {
  cinesubz_info,
  cinesubz_tv_firstdl,
  cinesubz_tvshow_info
} = require("../lib/cineall");
cmd({
  'pattern': "cine",
  'react': '🔎',
  'category': 'movie',
  'alias': ["cinesubz"],
  'desc': "cinesubz.co movie search",
  'use': ".cine 2025",
  'filename': __filename
}, async (_0x96aab8, _0x18027a, _0x8bcd4a, {
  from: _0x18f5f0,
  q: _0x1c4319,
  prefix: _0x112287,
  isPre: _0x1437a4,
  sender: _0x113441,
  isMe: _0xa870b8,
  reply: _0x5dcded
}) => {
  try {
    if (!_0x1c4319) {
      return await _0x5dcded("*please give me text !..*");
    }
    const _0x279fcd = await cinesubz_tv(_0x1c4319);
    if (!_0x279fcd || !_0x279fcd.data || _0x279fcd.data.length === 0x0) {
      await _0x96aab8.sendMessage(_0x18f5f0, {
        'react': {
          'text': '❌',
          'key': _0x8bcd4a.key
        }
      });
      return await _0x96aab8.sendMessage(_0x18f5f0, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x8bcd4a
      });
    }
    var _0x2a0c87 = [];
    for (var _0x2f1a43 = 0x0; _0x2f1a43 < _0x279fcd.data.length; _0x2f1a43++) {
      _0x2a0c87.push({
        'title': (_0x279fcd.data[_0x2f1a43].title || "No result").replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", ''),
        'description': '',
        'rowId': _0x112287 + "cinedl " + _0x279fcd.data[_0x2f1a43].link
      });
    }
    const _0x190a1f = [{
      'title': "cinesubz.co results",
      'rows': _0x2a0c87
    }];
    const _0x251090 = {
      'text': "_*CINESUBZ MOVIE SEARCH RESULTS 🎬*_\n\n*`Input :`* " + _0x1c4319,
      'footer': config.FOOTER,
      'title': "cinesubz.co results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0x190a1f
    };
    await _0x96aab8.listMessage(_0x18f5f0, _0x251090, _0x8bcd4a);
  } catch (_0x1ddf7d) {
    console.log(_0x1ddf7d);
    await _0x96aab8.sendMessage(_0x18f5f0, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x8bcd4a
    });
  }
});
cmd({
  'pattern': "cinedl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x858680, _0x4dd905, _0x2a2dca, {
  from: _0x2c06a4,
  q: _0x5dc8e2,
  isMe: _0x44af93,
  prefix: _0x301fba,
  reply: _0x3b42b7
}) => {
  try {
    if (!_0x5dc8e2 || !_0x5dc8e2.includes("https://cinesubz.co/movies/")) {
      console.log("Invalid input:", _0x5dc8e2);
      return await _0x3b42b7("*❗ This is a TV series, please use .tv command.*");
    }
    let _0x4cccc0 = await cinesubz_info(_0x5dc8e2);
    console.log(cinesubz_info);
    let _0x3c39be = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x4cccc0.data.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x4cccc0.data.date || 'N/A') + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x4cccc0.data.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x4cccc0.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x4cccc0.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x4cccc0.data.subtitle_author || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x4cccc0.data.genres.join(", ") || "N/A") + "\n";
    if (_0x4cccc0.length < 0x1) {
      return await _0x858680.sendMessage(_0x2c06a4, {
        'text': "erro !"
      }, {
        'quoted': _0x2a2dca
      });
    }
    var _0x4d03a8 = [];
    _0x4d03a8.push({
      'buttonId': _0x301fba + "ctdetails " + _0x5dc8e2,
      'buttonText': {
        'displayText': "Details Card\n"
      },
      'type': 0x1
    });
    _0x4cccc0.dl_links.map(_0x55b550 => {
      _0x4d03a8.push({
        'buttonId': _0x301fba + ("paka " + _0x4cccc0.data.image + '±' + _0x55b550.link + '±' + _0x4cccc0.data.title + "\n\t\n\t*`[ " + _0x55b550.quality + " ]`*"),
        'buttonText': {
          'displayText': (_0x55b550.size + "  (" + _0x55b550.quality + " )").replace("WEBDL", '').replace("WEB DL", '').replace("BluRay HD", '').replace("BluRay SD", '').replace("BluRay FHD", '').replace("Telegram BluRay SD", '').replace("Telegram BluRay HD", '').replace("Direct BluRay SD", '').replace("Direct BluRay HD", '').replace("Direct BluRay FHD", '').replace("FHD", '').replace('HD', '').replace('SD', '').replace("Telegram BluRay FHD", '')
        },
        'type': 0x1
      });
    });
    const _0x49c6b5 = {
      'image': {
        'url': _0x4cccc0.data.image.replace("-200x300", '')
      },
      'caption': _0x3c39be,
      'footer': config.FOOTER,
      'buttons': _0x4d03a8,
      'headerType': 0x4
    };
    return await _0x858680.buttonMessage(_0x2c06a4, _0x49c6b5, _0x2a2dca);
  } catch (_0x48e2d8) {
    console.log(_0x48e2d8);
    await _0x858680.sendMessage(_0x2c06a4, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x2a2dca
    });
  }
});
let isUploading = false;
cmd({
  'pattern': "paka",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x34022a, _0x24183c, _0x14cc7d, {
  from: _0x2c432e,
  q: _0x121a6c,
  isMe: _0x565b5e,
  reply: _0x54ca1a
}) => {
  if (!_0x121a6c) {
    return await _0x54ca1a("*Please provide a direct URL!*");
  }
  if (isUploading) {
    return await _0x34022a.sendMessage(_0x2c432e, {
      'text': "*A movie is already being uploaded. Please wait a while before uploading another one.* ⏳",
      'quoted': _0x24183c
    });
  }
  let _0x14602c = 0x0;
  isUploading = true;
  while (_0x14602c < 0x3) {
    try {
      const _0x55d867 = _0x121a6c.split('±')[0x0];
      const _0x4d876a = _0x121a6c.split('±')[0x1];
      const _0x3d55bb = _0x121a6c.split('±')[0x2];
      const _0xfc292b = await download(_0x4d876a);
      if (!_0xfc292b) {
        throw new Error("No direct download link found. Try again...");
      }
      const _0x5c189f = _0xfc292b.result.direct.trim();
      await _0x34022a.sendMessage(_0x2c432e, {
        'react': {
          'text': '⬆️',
          'key': _0x24183c.key
        }
      });
      const _0x103dd9 = await _0x34022a.sendMessage(_0x2c432e, {
        'text': "*Uploading your movie..⬆️*"
      });
      await _0x34022a.sendMessage(config.JID, {
        'document': {
          'url': _0x5c189f
        },
        'caption': "*🎬 Name :* " + _0x3d55bb + "\n\n> _*MOVIE VISPER WA BOT*_",
        'mimetype': "video/mp4",
        'jpegThumbnail': await (await fetch(_0x55d867)).buffer(),
        'fileName': _0x3d55bb + ".mp4"
      });
      await _0x34022a.sendMessage(_0x2c432e, {
        'delete': _0x103dd9.key
      });
      await _0x34022a.sendMessage(_0x2c432e, {
        'react': {
          'text': '✔️',
          'key': _0x24183c.key
        }
      });
      await _0x34022a.sendMessage(_0x2c432e, {
        'text': "*Movie sent successfully to JID " + config.JID + " ✔*"
      }, {
        'quoted': _0x24183c
      });
      break;
    } catch (_0x213510) {
      _0x14602c++;
      console.error("Attempt " + _0x14602c + ": Error fetching or sending:", _0x213510);
    }
  }
  if (_0x14602c >= 0x3) {
    await _0x34022a.sendMessage(_0x2c432e, {
      'text': "*Error fetching this moment. Please try again later ❗*"
    }, {
      'quoted': _0x24183c
    });
  }
  isUploading = false;
});
cmd({
  'pattern': "ctdetails",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0xe2c85c, _0x2c5aa3, _0xae0696, {
  from: _0x147647,
  q: _0x396937,
  isMe: _0xb6e93a,
  reply: _0x454801
}) => {
  try {
    if (!_0x396937) {
      return await _0x454801("*please give me text !..*");
    }
    let _0x367e44 = await cinesubz_info(_0x396937);
    const _0x2bc15c = (await axios.get("https://raw.githubusercontent.com/THEMISADAS2007/MOVIE-VISPER-DATABASE/refs/heads/main/User/main_var.json")).data;
    let _0x3bb590 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x367e44.data.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x367e44.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x367e44.data.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x367e44.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x367e44.data.runtime || 'N/A') + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x367e44.data.subtitle_author || 'N/A') + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* _" + (_0x367e44.data.genres.join(", ") || 'N/A') + "_\n\n> 🌟 Follow us : *" + _0x2bc15c.chlink + "*\n\n> _*MOVIE VISPER MULTIDEVICE*_\n";
    await _0xe2c85c.sendMessage(config.JID, {
      'image': {
        'url': _0x367e44.data.image.replace("-200x300", '')
      },
      'caption': _0x3bb590
    });
    await _0xe2c85c.sendMessage(_0x147647, {
      'react': {
        'text': '✔️',
        'key': _0xae0696.key
      }
    });
  } catch (_0x5b7463) {
    console.error("Error fetching or sending", _0x5b7463);
    await _0xe2c85c.sendMessage(_0x147647, "*Error fetching or sending *", {
      'quoted': _0xae0696
    });
  }
});
cmd({
  'pattern': "pupilvideo",
  'react': '🔎',
  'category': "movie",
  'alias': ["sinhalafilm"],
  'desc': "pupilvideo.blogspot.com movie search",
  'use': ".pupilvideot ape",
  'filename': __filename
}, async (_0x13ee44, _0x357eba, _0x19ad94, {
  from: _0x1449e3,
  q: _0x2879ac,
  prefix: _0x47fc6d,
  isMe: _0x30c643,
  reply: _0x17898e
}) => {
  try {
    if (!_0x2879ac) {
      return await _0x17898e("*Please provide a movie name!*");
    }
    let _0x4e797b = await fetchJson('https://darksadas-yt-new-movie-search.vercel.app/?url=' + _0x2879ac);
    if (!_0x4e797b || !_0x4e797b.data || _0x4e797b.data.length === 0x0) {
      await _0x13ee44.sendMessage(_0x1449e3, {
        'react': {
          'text': '❌',
          'key': _0x19ad94.key
        }
      });
      return await _0x13ee44.sendMessage(_0x1449e3, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x19ad94
      });
    }
    var _0x3efda7 = [];
    for (var _0x3cf16c = 0x0; _0x3cf16c < _0x4e797b.data.length; _0x3cf16c++) {
      _0x3efda7.push({
        'title': _0x4e797b.data[_0x3cf16c].title,
        'description': '',
        'rowId': _0x47fc6d + "newdl " + _0x4e797b.data[_0x3cf16c].link
      });
    }
    const _0xc18e9b = [{
      'title': "pupilvideo.blogspot.com results",
      'rows': _0x3efda7
    }];
    const _0x5ebc69 = {
      'text': "_*🎬PUPILVIDEO MOVIE SEARCH RESULTS 🎬*_\n\n*Movie Search : " + _0x2879ac + " 🔎*",
      'footer': config.FOOTER,
      'title': "Search Results 🎬",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0xc18e9b
    };
    await _0x13ee44.listMessage(_0x1449e3, _0x5ebc69, _0x19ad94);
  } catch (_0x4a2cda) {
    console.log(_0x4a2cda);
    await _0x13ee44.sendMessage(_0x1449e3, {
      'text': "🚩 *Error occurred!!*"
    }, {
      'quoted': _0x19ad94
    });
  }
});
cmd({
  'pattern': "newdl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0xd58b55, _0x3d90cd, _0x10996a, {
  from: _0x285724,
  q: _0x534f3f,
  isMe: _0x415f6a,
  prefix: _0x1cf9e9,
  reply: _0x1709cb
}) => {
  try {
    if (!_0x534f3f) {
      return await _0x1709cb("*please give me text !..*");
    }
    let _0x34c6db = await fetchJson("https://darksadasyt-new-mv-site-info.vercel.app/?url=" + _0x534f3f);
    let _0x52810c = "*☘️ 𝗧ɪᴛʟᴇ ➮*  _" + (_0x34c6db.title || "N/A") + "_\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮*  _" + (_0x34c6db.date || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x34c6db.subtitle_author || "N/A") + '_';
    if (_0x34c6db.downloadLinks.length < 0x1) {
      return await _0xd58b55.sendMessage(_0x285724, {
        'text': "erro !"
      }, {
        'quoted': _0x10996a
      });
    }
    var _0x3dc772 = [];
    _0x3dc772.push({
      'buttonId': _0x1cf9e9 + "dubdet " + _0x534f3f,
      'buttonText': {
        'displayText': "Details send"
      },
      'type': 0x1
    });
    _0x34c6db.downloadLinks.map(_0x5e13ba => {
      _0x3dc772.push({
        'buttonId': _0x1cf9e9 + ("ndll " + _0x34c6db.image + '±' + _0x5e13ba.link + '±' + _0x34c6db.title),
        'buttonText': {
          'displayText': '' + _0x5e13ba.title
        },
        'type': 0x1
      });
    });
    const _0x40f6f2 = {
      'image': {
        'url': _0x34c6db.image
      },
      'caption': _0x52810c,
      'footer': config.FOOTER,
      'buttons': _0x3dc772,
      'headerType': 0x4
    };
    return await _0xd58b55.buttonMessage(_0x285724, _0x40f6f2, _0x10996a);
  } catch (_0x184771) {
    console.log(_0x184771);
    await _0xd58b55.sendMessage(_0x285724, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x10996a
    });
  }
});
async function resizeImage(_0x31afcb, _0x2d364a, _0x47632b) {
  try {
    return await sharp(_0x31afcb).resize(_0x2d364a, _0x47632b).toBuffer();
  } catch (_0x1d2c7c) {
    console.error("Error resizing image:", _0x1d2c7c);
    return _0x31afcb;
  }
}
cmd({
  'pattern': "ndll",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x231395, _0xe4bac, _0x3b7688, {
  from: _0x8353e7,
  q: _0x2fbf67,
  isMe: _0x463442,
  reply: _0xf71791
}) => {
  if (!_0x2fbf67) {
    return await _0xf71791("*Please provide a direct URL!*");
  }
  try {
    await _0x231395.sendMessage(_0x8353e7, {
      'text': "*Downloading your movie..⬇️*"
    }, {
      'quoted': _0xe4bac
    });
    const _0xc19611 = _0x2fbf67.split('±')[0x0];
    const _0x5a7143 = _0x2fbf67.split('±')[0x1];
    const _0x4d2bd5 = _0x2fbf67.split('±')[0x2];
    const _0x59d137 = _0x5a7143 + "&download=true";
    const _0x45aa9f = _0x59d137.trim();
    const _0x22c4f5 = await axios.get(_0x45aa9f, {
      'responseType': "arraybuffer"
    });
    const _0x3252ba = Buffer.from(_0x22c4f5.data, "binary");
    const _0x279403 = await fetch(_0xc19611);
    const _0x274e95 = await _0x279403.buffer();
    const _0x46933d = await resizeImage(_0x274e95, 0xc8, 0xc8);
    const _0x18c1e8 = {
      'document': _0x3252ba,
      'caption': "*🎬 Name :* " + _0x4d2bd5 + "\n\n\n> _*MOVIE VISPER WA BOT*_",
      'jpegThumbnail': _0x46933d,
      'mimetype': "video/mp4",
      'fileName': _0x4d2bd5 + ".mp4"
    };
    await _0x231395.sendMessage(_0x8353e7, {
      'react': {
        'text': '⬆️',
        'key': _0xe4bac.key
      }
    });
    await _0x231395.sendMessage(_0x8353e7, {
      'text': "*Uploading your movie..⬆️*"
    }, {
      'quoted': _0xe4bac
    });
    await _0x231395.sendMessage(config.JID, _0x18c1e8);
    await _0x231395.sendMessage(_0x8353e7, {
      'react': {
        'text': '✔️',
        'key': _0xe4bac.key
      }
    });
    await _0x231395.sendMessage(_0x8353e7, {
      'text': "*Movie send Successfull this JID " + config.JID + " ✔*"
    }, {
      'quoted': _0xe4bac
    });
  } catch (_0x28b761) {
    console.error("Error fetching or sending", _0x28b761);
    await _0x231395.sendMessage(_0x8353e7, "*Error fetching or sending *", {
      'quoted': _0xe4bac
    });
  }
});
cmd({
  'pattern': 'dubdet',
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0xe9e03e, _0x157005, _0x4d5201, {
  from: _0x3361ac,
  q: _0x222acc,
  isMe: _0x3abbcc,
  reply: _0x1cdf19
}) => {
  try {
    if (!_0x222acc) {
      return await _0x1cdf19("*please give me text !..*");
    }
    let _0x4227d3 = await fetchJson("https://darksadasyt-new-mv-site-info.vercel.app/?url=" + _0x222acc);
    const _0x75ec69 = (await axios.get("https://raw.githubusercontent.com/THEMISADAS2007/MOVIE-VISPER-DATABASE/refs/heads/main/User/main_var.json")).data;
    let _0x17774f = "*☘️ 𝗧ɪᴛʟᴇ ➮*  _" + (_0x4227d3.title || "N/A") + "_\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮*  _" + (_0x4227d3.date || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x4227d3.subtitle_author || "N/A") + "_\n\n> 🌟 Follow us : *" + _0x75ec69.chlink + "*\n\n> _*MOVIE VISPER MULTIDEVICE*_\n";
    await _0xe9e03e.sendMessage(config.JID, {
      'image': {
        'url': _0x4227d3.image
      },
      'caption': _0x17774f
    });
    await _0xe9e03e.sendMessage(_0x3361ac, {
      'react': {
        'text': '✔️',
        'key': _0x4d5201.key
      }
    });
  } catch (_0x42c58d) {
    console.error("Error fetching or sending", _0x42c58d);
    await _0xe9e03e.sendMessage(_0x3361ac, "*Error fetching or sending *", {
      'quoted': _0x4d5201
    });
  }
});
cmd({
  'pattern': 'cinetv',
  'react': '🔎',
  'category': "movie",
  'alias': ["ctv"],
  'desc': "cinesubz.co tv shows search",
  'use': ".cinetv  2025",
  'filename': __filename
}, async (_0x138054, _0x31d1ef, _0x214b4f, {
  from: _0x38acb3,
  q: _0x10602e,
  prefix: _0x3d13f3,
  isMe: _0x348780,
  reply: _0xb5c614
}) => {
  try {
    if (!_0x10602e) {
      return await _0xb5c614("*please give me text !..*");
    }
    let _0x977ba3 = await fetchJson("https://darksadas-yt-cinesubz-tv-search.vercel.app/?query=" + _0x10602e);
    if (!_0x977ba3 || !_0x977ba3.data || _0x977ba3.data.length === 0x0) {
      await _0x138054.sendMessage(_0x38acb3, {
        'react': {
          'text': '❌',
          'key': _0x214b4f.key
        }
      });
      return await _0x138054.sendMessage(_0x38acb3, {
        'text': "*No results found ❌*"
      }, {
        'quoted': _0x214b4f
      });
    }
    var _0x28d599 = [];
    for (var _0x1aa14b = 0x0; _0x1aa14b < _0x977ba3.data.length; _0x1aa14b++) {
      _0x28d599.push({
        'title': _0x977ba3.data[_0x1aa14b].title.replace("Sinhala Subtitles | සිංහල උපසිරැසි සමඟ", '').replace("Sinhala Subtitle | සිංහල උපසිරැසි සමඟ", '') || "Result not found",
        'description': '',
        'rowId': _0x3d13f3 + "cinetvdl " + _0x977ba3.data[_0x1aa14b].link
      });
    }
    const _0xe84a25 = [{
      'title': "cinesubz.co results",
      'rows': _0x28d599
    }];
    const _0x1b94ee = {
      'text': "_*CINESUBZ TV SHOWS RESULTS 📺*_\n\n*`Input :`* " + _0x10602e,
      'footer': config.FOOTER,
      'title': "cinesubz.co results",
      'buttonText': "*Reply Below Number 🔢*",
      'sections': _0xe84a25
    };
    await _0x138054.listMessage(_0x38acb3, _0x1b94ee, _0x214b4f);
  } catch (_0x2ef392) {
    console.log(_0x2ef392);
    await _0x138054.sendMessage(_0x38acb3, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x214b4f
    });
  }
});
cmd({
  'pattern': "cinetvdl",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x1d8da6, _0x24c5dd, _0x44628b, {
  from: _0x33bfc8,
  q: _0x3cfbba,
  isMe: _0x5c7431,
  prefix: _0x4a9096,
  reply: _0x25e4a3
}) => {
  try {
    if (!_0x3cfbba || !_0x3cfbba.includes("https://cinesubz.co/tvshows")) {
      console.log("Invalid input:", _0x3cfbba);
      return await _0x25e4a3("*❗ This is a movie, please use .mv command.*");
    }
    let _0x429a61 = await fetchJson("https://darksadas-yt-cineszub-tv-shows.vercel.app/?url=" + _0x3cfbba + "&apikey=pramashi");
    let _0x111e31 = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x429a61.data.title || "N/A") + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x429a61.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x429a61.data.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x429a61.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x429a61.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x429a61.data.subtitle_author || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x429a61.data.genres.join(", ") || "N/A") + "\n";
    var _0x19cbe2 = [];
    _0x19cbe2.push({
      'buttonId': _0x4a9096 + "ctdetailss " + _0x3cfbba,
      'buttonText': {
        'displayText': "Details Card"
      },
      'type': 0x1
    }, {
      'buttonId': _0x4a9096 + "dlc " + _0x3cfbba,
      'buttonText': {
        'displayText': "All Epishodes Send\n"
      },
      'type': 0x1
    });
    _0x429a61.data.episodes.map(_0xd4ef9c => {
      _0x19cbe2.push({
        'buttonId': _0x4a9096 + ("dlcc " + _0x429a61.data.image + '±' + _0xd4ef9c.episode_link + '±' + _0x429a61.data.title + " *`" + _0xd4ef9c.title + '`*'),
        'buttonText': {
          'displayText': '' + _0xd4ef9c.title
        },
        'type': 0x1
      });
    });
    const _0x252e3b = {
      'image': {
        'url': _0x429a61.data.image.replace("-200x300", '')
      },
      'caption': _0x111e31,
      'footer': config.FOOTER,
      'buttons': _0x19cbe2,
      'headerType': 0x4
    };
    return await _0x1d8da6.buttonMessage(_0x33bfc8, _0x252e3b, _0x44628b);
  } catch (_0x1d5294) {
    console.log(_0x1d5294);
    await _0x1d8da6.sendMessage(_0x33bfc8, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x44628b
    });
  }
});
cmd({
  'pattern': "cinefirstdl",
  'react': '🎬',
  'alias': ['tv'],
  'desc': "Moive downloader",
  'filename': __filename
}, async (_0x28cbe8, _0x586d53, _0x2e582c, {
  from: _0x53fea4,
  q: _0x27158c,
  prefix: _0x210f8e,
  isMe: _0x2dcb70,
  reply: _0x4a4070
}) => {
  try {
    if (!_0x27158c) {
      return await _0x4a4070("*please give me text !..*");
    }
    const _0xf0cfd4 = _0x27158c.split('±')[0x0];
    const _0x2e260a = _0x27158c.split('±')[0x1];
    const _0x510fa8 = _0x27158c.split('±')[0x2];
    let _0x592c6f = await fetchJson("https://darksadas-yt-cineszub-tv-shows-firstdl.vercel.app/?url=" + _0x2e260a + '&apikey=pramashi');
    if (_0x592c6f.length < 0x1) {
      return await _0x28cbe8.sendMessage(_0x53fea4, {
        'text': N_FOUND
      }, {
        'quoted': _0x2e582c
      });
    }
    var _0x2564cc = [];
    for (var _0x5ddbf3 = 0x0; _0x5ddbf3 < _0x592c6f.data.length; _0x5ddbf3++) {
      _0x2564cc.push({
        'title': _0x592c6f.data[_0x5ddbf3].quality + "  " + _0x592c6f.data[_0x5ddbf3].size,
        'description': '',
        'rowId': _0x210f8e + ("dlc " + _0x592c6f.data[_0x5ddbf3].link + '±' + _0xf0cfd4 + '±' + _0x510fa8 + "\n\t\n\t*`" + _0x592c6f.data[_0x5ddbf3].quality + '`*')
      });
    }
    const _0x2dae0e = [{
      'title': "_[Select quaility 🎬]_",
      'rows': _0x2564cc
    }];
    const _0xeaa784 = {
      'text': "*🎬Select quaility 🎬*",
      'footer': config.FOOTER,
      'title': "_[cinesubz.co results 🎬]_",
      'buttonText': "*`Reply Below Number 🔢`*\n",
      'sections': _0x2dae0e
    };
    await _0x28cbe8.listMessage(_0x53fea4, _0xeaa784, _0x2e582c);
  } catch (_0x419c76) {
    console.log(_0x419c76);
    await _0x28cbe8.sendMessage(_0x53fea4, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x2e582c
    });
  }
});
cmd({
  'pattern': "dlc",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4bfa23, _0xd43d89, _0x4898f3, {
  from: _0x1807f8,
  q: _0x364523,
  isMe: _0x1640bd,
  reply: _0x1b0c29
}) => {
  if (!_0x364523) {
    return await _0x1b0c29("*Please provide a direct URL!*");
  }
  try {
    let _0x55f98c = await cinesubz_tvshow_info(_0x364523);
    console.log("API Response:", JSON.stringify(_0x55f98c, null, 0x2));
    if (!_0x55f98c.data || !Array.isArray(_0x55f98c.data.episodes) || _0x55f98c.data.episodes.length === 0x0) {
      return await _0x4bfa23.sendMessage(_0x1807f8, {
        'text': "No episodes found in the provided URL."
      }, {
        'quoted': _0xd43d89
      });
    }
    await _0x4bfa23.sendMessage(_0x1807f8, {
      'text': "*Epishodes fetching started...🔂*"
    }, {
      'quoted': _0xd43d89
    });
    let _0x916815 = _0x55f98c.data.episodes.map(_0x39dba1 => _0x39dba1.link).filter(_0x16e95e => typeof _0x16e95e === "string" && _0x16e95e.trim() !== '');
    if (_0x916815.length === 0x0) {
      return await _0x4bfa23.sendMessage(_0x1807f8, {
        'text': "No valid episode links found."
      }, {
        'quoted': _0xd43d89
      });
    }
    const _0x54d075 = _0x55f98c.data.title || "Unknown_Show";
    const _0x228414 = _0x55f98c.data.mainImage || "https://i.ibb.co/hcyQfwy/7a265c4eee41e2b7.jpg";
    fetchEpisodesWithRetry(_0x916815, _0x4bfa23, _0xd43d89, _0x1807f8, _0x1b0c29, _0x54d075, _0x228414);
  } catch (_0x31e03e) {
    console.error("Error fetching or sending:", _0x31e03e);
    await _0x4bfa23.sendMessage(_0x1807f8, {
      'text': "*Error fetching or sending*"
    }, {
      'quoted': _0xd43d89
    });
  }
});
async function fetchEpisodesWithRetry(_0x4b8ce9, _0x128971, _0x15b329, _0x472898, _0x574ea5, _0x535e18, _0x11c299, _0x1cff02 = 0x3) {
  let _0x1779cd = 0x0;
  async function _0x56da74(_0x7e0232 = 0x1) {
    if (_0x1779cd >= _0x4b8ce9.length) {
      await _0x128971.sendMessage(_0x472898, {
        'text': "*All episodes sent successfully ☑️*"
      }, {
        'quoted': _0x15b329
      });
      return;
    }
    let _0x30ae44 = _0x4b8ce9[_0x1779cd];
    try {
      let _0xa832b3 = await cinesubz_tv_firstdl(_0x30ae44);
      console.log(_0xa832b3);
      if (!_0xa832b3 || !_0xa832b3.dl_links || _0xa832b3.dl_links.length === 0x0) {
        throw new Error("Episode " + (_0x1779cd + 0x1) + ": No valid download link found.");
      }
      const _0x1d24a4 = _0xa832b3.dl_links[0x0];
      const _0x3d9b22 = _0x1d24a4.link;
      const _0x4a9967 = await download(_0x3d9b22);
      if (!_0x4a9967 || !_0x4a9967.result || !_0x4a9967.result.direct) {
        throw new Error("Episode " + (_0x1779cd + 0x1) + ": No direct download link found.");
      }
      const _0x217663 = _0x4a9967.result.direct;
      if (!_0x217663.startsWith("http")) {
        throw new Error("Invalid download URL: " + _0x217663);
      }
      const _0x357438 = await axios.get(_0x217663, {
        'responseType': "arraybuffer"
      });
      if (!_0x357438.data) {
        throw new Error("Failed to fetch episode data.");
      }
      const _0xa3251f = Buffer.from(_0x357438.data, 'binary');
      const _0x1205ac = _0x535e18 + "_Episode_" + (_0x1779cd + 0x1) + ".mp4";
      await _0x128971.sendMessage(config.JID, {
        'document': _0xa3251f,
        'caption': "*📺 Episode " + (_0x1779cd + 0x1) + " - " + _0x535e18 + "*\n\n> _*MOVIE VISPER WA BOT*_",
        'jpegThumbnail': await (await fetch(_0x11c299)).buffer(),
        'mimetype': 'video/mp4',
        'fileName': _0x1205ac
      });
    } catch (_0x464956) {
      console.error("Error fetching Episode " + (_0x1779cd + 0x1) + ", Attempt " + _0x7e0232 + ':', _0x464956);
      if (_0x7e0232 < _0x1cff02) {
        console.log("Retrying Episode " + (_0x1779cd + 0x1) + " (Attempt " + (_0x7e0232 + 0x1) + ")...");
        return setTimeout(() => _0x56da74(_0x7e0232 + 0x1), 0x1388);
      } else {
        await _0x128971.sendMessage(_0x472898, {
          'text': "*⚠️ Failed to fetch Episode " + (_0x1779cd + 0x1) + " after " + _0x1cff02 + " attempts.*"
        }, {
          'quoted': _0x15b329
        });
      }
    }
    _0x1779cd++;
    setTimeout(() => _0x56da74(), 0x1388);
  }
  _0x56da74();
}
cmd({
  'pattern': "dlcc",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1140d3, _0x25600e, _0x10e80c, {
  from: _0x4b906b,
  q: _0x48572c,
  isMe: _0x32480a,
  reply: _0x22e889
}) => {
  if (!_0x48572c) {
    return await _0x22e889("*Please provide a direct URL!*");
  }
  try {
    const _0x11a303 = _0x48572c.split('±')[0x0];
    const _0x46a819 = _0x48572c.split('±')[0x1];
    const _0x1d3dde = _0x48572c.split('±')[0x2];
    let _0x5b81c3 = await cinesubz_tv_firstdl(_0x46a819);
    if (_0x5b81c3.length < 0x1) {
      return await _0x1140d3.sendMessage(_0x4b906b, {
        'text': "Not Found"
      }, {
        'quoted': _0x25600e
      });
    }
    const _0x583dc4 = _0x5b81c3.dl_links[0x0];
    const _0x52a983 = '' + _0x583dc4.link;
    _0x22e889(_0x52a983);
    const _0x425bdf = await download(_0x52a983);
    if (!_0x425bdf) {
      throw new Error("No direct download link found. Try again...");
    }
    const _0x37a51c = '' + _0x425bdf.result.direct;
    const _0x7a851c = '' + _0x11a303;
    await _0x1140d3.sendMessage(_0x4b906b, {
      'react': {
        'text': '⬆️',
        'key': _0x25600e.key
      }
    });
    await _0x1140d3.sendMessage(_0x4b906b, {
      'text': "*Uploading your movie..⬆️*"
    }, {
      'quoted': _0x25600e
    });
    await _0x1140d3.sendMessage(config.JID, {
      'document': {
        'url': _0x37a51c
      },
      'caption': "*🎬 Name :* " + _0x1d3dde + "\n\n\n> _*MOVIE VISPER WA BOT*_\n     ",
      'mimetype': "video/mp4",
      'jpegThumbnail': await (await fetch(_0x7a851c)).buffer(),
      'fileName': _0x1d3dde + ".mp4"
    });
    await _0x1140d3.sendMessage(_0x4b906b, {
      'react': {
        'text': '✔️',
        'key': _0x25600e.key
      }
    });
    await _0x1140d3.sendMessage(_0x4b906b, {
      'text': "*Movie send Successfull this JID " + config.JID + " ✔*"
    }, {
      'quoted': _0x25600e
    });
  } catch (_0x1b61f0) {
    console.error("Error fetching or sending", _0x1b61f0);
    await _0x1140d3.sendMessage(_0x4b906b, "*Error fetching or sending *", {
      'quoted': _0x25600e
    });
  }
});
cmd({
  'pattern': "ctdetailss",
  'react': '🎥',
  'desc': "moive downloader",
  'filename': __filename
}, async (_0x38dfb5, _0x4cf8c5, _0x35fe52, {
  from: _0x433c30,
  q: _0x2e7cb7,
  isMe: _0x2f3d64,
  reply: _0x107a42
}) => {
  try {
    if (!_0x2e7cb7) {
      return await _0x107a42("*please give me text !..*");
    }
    let _0x421fdf = await fetchJson("https://darksadas-yt-cineszub-tv-shows.vercel.app/?url=" + _0x2e7cb7 + "&apikey=pramashi");
    const _0x29470d = (await axios.get('https://raw.githubusercontent.com/THEMISADAS2007/MOVIE-VISPER-DATABASE/refs/heads/main/User/main_var.json')).data;
    let _0x402a8a = "*☘️ 𝗧ɪᴛʟᴇ ➮* *_" + (_0x421fdf.data.title || 'N/A') + "_*\n\n*📅 𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* _" + (_0x421fdf.data.date || "N/A") + "_\n*🌎 𝗖ᴏᴜɴᴛʀʏ ➮* _" + (_0x421fdf.data.country || "N/A") + "_\n*💃 𝗥ᴀᴛɪɴɢ ➮* _" + (_0x421fdf.data.imdb || "N/A") + "_\n*⏰ 𝗥ᴜɴᴛɪᴍᴇ ➮* _" + (_0x421fdf.data.runtime || "N/A") + "_\n*💁‍♂️ 𝗦ᴜʙᴛɪᴛʟᴇ ʙʏ ➮* _" + (_0x421fdf.data.subtitle_author || "N/A") + "_\n*🎭 𝗚ᴇɴᴀʀᴇꜱ ➮* " + (_0x421fdf.data.genres.join(", ") || "N/A") + "\n\n> 🌟 Follow us : *" + _0x29470d.chlink + "*\n\n> _*MOVIE VISPER MULTIDEVICE*_";
    await _0x38dfb5.sendMessage(config.JID, {
      'image': {
        'url': _0x421fdf.data.image.replace("-200x300", '')
      },
      'caption': _0x402a8a
    });
    await _0x38dfb5.sendMessage(_0x433c30, {
      'react': {
        'text': '✔️',
        'key': _0x35fe52.key
      }
    });
  } catch (_0xc93e25) {
    console.error("Error fetching or sending", _0xc93e25);
    await _0x38dfb5.sendMessage(_0x433c30, "*Error fetching or sending *", {
      'quoted': _0x35fe52
    });
  }
});
