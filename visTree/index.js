import * as d3 from 'https://unpkg.com/d3?module';

const testingManifest = {
  version: 'bec3e4ad',
  entry: {
    module: '/build/entry.client-3JANFGJA.js',
    imports: [
      '/build/_shared/chunk-MCK7S4UV.js',
      '/build/_shared/chunk-6Z5ORJPN.js',
      '/build/_shared/chunk-FSENWBIK.js',
      '/build/_shared/chunk-4OIXUW6E.js',
      '/build/_shared/chunk-2LOM2E4Y.js',
    ],
  },
  routes: {
    root: {
      id: 'root',
      path: '',
      module: '/build/root-BRQAFSBA.js',
      imports: [
        '/build/_shared/chunk-23W6YJGQ.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-QJVU7YPY.js',
        '/build/_shared/chunk-MGMCP3PW.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-A6R4AHOA.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: true,
      hasErrorBoundary: true,
    },
    'routes/$slug': {
      id: 'routes/$slug',
      parentId: 'root',
      path: ':slug',
      module: '/build/routes/$slug-TI37XKYO.js',
      imports: [
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: true,
      hasErrorBoundary: false,
    },
    'routes/404': {
      id: 'routes/404',
      parentId: 'root',
      path: '404',
      module: '/build/routes/404-5F3QVGBJ.js',
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/500': {
      id: 'routes/500',
      parentId: 'root',
      path: '500',
      module: '/build/routes/500-NP2PVKBZ.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: true,
    },
    'routes/about': {
      id: 'routes/about',
      parentId: 'root',
      path: 'about',
      module: '/build/routes/about-33AIJWBC.js',
      imports: [
        '/build/_shared/chunk-24YL4M67.js',
        '/build/_shared/chunk-H3D3N5SF.js',
        '/build/_shared/chunk-QDSYH2AY.js',
        '/build/_shared/chunk-GTQJJ7P5.js',
        '/build/_shared/chunk-VU65GJMD.js',
        '/build/_shared/chunk-QYKS7KRI.js',
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/action/convert-kit': {
      id: 'routes/action/convert-kit',
      parentId: 'root',
      path: 'action/convert-kit',
      module: '/build/routes/action/convert-kit-TJBIYXGD.js',
      hasAction: true,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/action/refresh-cache': {
      id: 'routes/action/refresh-cache',
      parentId: 'root',
      path: 'action/refresh-cache',
      module: '/build/routes/action/refresh-cache-HY3ZEWTN.js',
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/action/set-theme': {
      id: 'routes/action/set-theme',
      parentId: 'root',
      path: 'action/set-theme',
      module: '/build/routes/action/set-theme-CSSSFVMI.js',
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/blog': {
      id: 'routes/blog',
      parentId: 'root',
      path: 'blog',
      module: '/build/routes/blog-WZF5FZB4.js',
      imports: [
        '/build/_shared/chunk-FWHUW6LN.js',
        '/build/_shared/chunk-W7VEGQGZ.js',
        '/build/_shared/chunk-QYKS7KRI.js',
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-MJCOHDZW.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-IMZDJCBA.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: true,
    },
    'routes/blog.$slug': {
      id: 'routes/blog.$slug',
      parentId: 'root',
      path: 'blog/:slug',
      module: '/build/routes/blog.$slug-J33H5XJM.js',
      imports: [
        '/build/_shared/chunk-FWHUW6LN.js',
        '/build/_shared/chunk-W7VEGQGZ.js',
        '/build/_shared/chunk-WWYPCIUR.js',
        '/build/_shared/chunk-QYKS7KRI.js',
        '/build/_shared/chunk-FGBPS4B5.js',
        '/build/_shared/chunk-JCWG3GLE.js',
        '/build/_shared/chunk-6BT5764Y.js',
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-LBXDCQPQ.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: true,
      hasErrorBoundary: true,
    },
    'routes/blog.list': {
      id: 'routes/blog.list',
      parentId: 'root',
      path: 'blog/list',
      module: '/build/routes/blog.list-RJR44WYT.js',
      imports: ['/build/_shared/chunk-W7JHG62I.js'],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/blog.rss[.]xml': {
      id: 'routes/blog.rss[.]xml',
      parentId: 'root',
      path: 'blog/rss.xml',
      module: '/build/routes/blog.rss[.]xml-PHKRZMD5.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/blog[.]json': {
      id: 'routes/blog[.]json',
      parentId: 'root',
      path: 'blog.json',
      module: '/build/routes/blog[.]json-KTYXALR4.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/cache.admin': {
      id: 'routes/cache.admin',
      parentId: 'root',
      path: 'cache/admin',
      module: '/build/routes/cache.admin-VWMIIH6E.js',
      imports: [
        '/build/_shared/chunk-AUYLHJJM.js',
        '/build/_shared/chunk-O2OCGRZA.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: true,
    },
    'routes/calls': {
      id: 'routes/calls',
      parentId: 'root',
      path: 'calls',
      module: '/build/routes/calls-J5S6C4H3.js',
      imports: [
        '/build/_shared/chunk-EQ73EGCY.js',
        '/build/_shared/chunk-X3KGDFJP.js',
        '/build/_shared/chunk-4RUJV5CA.js',
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-GFXDFTN7.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/calls.admin': {
      id: 'routes/calls.admin',
      parentId: 'root',
      path: 'calls/admin',
      module: '/build/routes/calls.admin-G24UEQHB.js',
      imports: [
        '/build/_shared/chunk-LBXDCQPQ.js',
        '/build/_shared/chunk-SJ325QDX.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/calls.admin/$callId': {
      id: 'routes/calls.admin/$callId',
      parentId: 'routes/calls.admin',
      path: ':callId',
      module: '/build/routes/calls.admin/$callId-AX3OYS44.js',
      imports: [
        '/build/_shared/chunk-4RUJV5CA.js',
        '/build/_shared/chunk-NOREGQSO.js',
        '/build/_shared/chunk-W7JHG62I.js',
        '/build/_shared/chunk-SDWDQNV3.js',
        '/build/_shared/chunk-RCM5YQFM.js',
        '/build/_shared/chunk-GFXDFTN7.js',
        '/build/_shared/chunk-MJCOHDZW.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-23W6YJGQ.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-QJVU7YPY.js',
        '/build/_shared/chunk-MGMCP3PW.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-A6R4AHOA.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/calls.admin/index': {
      id: 'routes/calls.admin/index',
      parentId: 'routes/calls.admin',
      index: true,
      module: '/build/routes/calls.admin/index-X5FCBZU4.js',
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/calls.record': {
      id: 'routes/calls.record',
      parentId: 'root',
      path: 'calls/record',
      module: '/build/routes/calls.record-JUXMVFRY.js',
      imports: [
        '/build/_shared/chunk-LBXDCQPQ.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/calls.record/$callId': {
      id: 'routes/calls.record/$callId',
      parentId: 'routes/calls.record',
      path: ':callId',
      module: '/build/routes/calls.record/$callId-S7IOSOLL.js',
      imports: [
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/calls.record/index': {
      id: 'routes/calls.record/index',
      parentId: 'routes/calls.record',
      index: true,
      module: '/build/routes/calls.record/index-GPKXBYZQ.js',
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/calls.record/new': {
      id: 'routes/calls.record/new',
      parentId: 'routes/calls.record',
      path: 'new',
      module: '/build/routes/calls.record/new-TOGCIKAA.js',
      imports: [
        '/build/_shared/chunk-SDWDQNV3.js',
        '/build/_shared/chunk-RCM5YQFM.js',
        '/build/_shared/chunk-GFXDFTN7.js',
        '/build/_shared/chunk-MJCOHDZW.js',
        '/build/_shared/chunk-23W6YJGQ.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-QJVU7YPY.js',
        '/build/_shared/chunk-MGMCP3PW.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-A6R4AHOA.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: true,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: true,
    },
    'routes/calls/$season.$episode': {
      id: 'routes/calls/$season.$episode',
      parentId: 'routes/calls',
      path: ':season/:episode',
      module: '/build/routes/calls/$season.$episode-4GFC2F74.js',
      imports: ['/build/_shared/chunk-XBOHSII6.js'],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/calls/$season.$episode.$slug': {
      id: 'routes/calls/$season.$episode.$slug',
      parentId: 'routes/calls',
      path: ':season/:episode/:slug',
      module: '/build/routes/calls/$season.$episode.$slug-543NMXSQ.js',
      imports: [
        '/build/_shared/chunk-23W6YJGQ.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-QJVU7YPY.js',
        '/build/_shared/chunk-MGMCP3PW.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-A6R4AHOA.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/chats': {
      id: 'routes/chats',
      parentId: 'root',
      path: 'chats',
      module: '/build/routes/chats-DICOXU2M.js',
      imports: [
        '/build/_shared/chunk-F2YPVMK5.js',
        '/build/_shared/chunk-X3KGDFJP.js',
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-IMZDJCBA.js',
        '/build/_shared/chunk-EX7BVCXG.js',
        '/build/_shared/chunk-DEGHMNTV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/chats.$season.$episode': {
      id: 'routes/chats.$season.$episode',
      parentId: 'root',
      path: 'chats/:season/:episode',
      module: '/build/routes/chats.$season.$episode-5LTTEUGA.js',
      imports: [
        '/build/_shared/chunk-DEGHMNTV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/chats.$season.$episode.$slug': {
      id: 'routes/chats.$season.$episode.$slug',
      parentId: 'root',
      path: 'chats/:season/:episode/:slug',
      module: '/build/routes/chats.$season.$episode.$slug-B5E34SF2.js',
      imports: [
        '/build/_shared/chunk-IMZDJCBA.js',
        '/build/_shared/chunk-EX7BVCXG.js',
        '/build/_shared/chunk-DEGHMNTV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: true,
      hasErrorBoundary: false,
    },
    'routes/chats/$season': {
      id: 'routes/chats/$season',
      parentId: 'routes/chats',
      path: ':season',
      module: '/build/routes/chats/$season-BEEBBKKF.js',
      imports: [
        '/build/_shared/chunk-VU65GJMD.js',
        '/build/_shared/chunk-23W6YJGQ.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-QJVU7YPY.js',
        '/build/_shared/chunk-MGMCP3PW.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-A6R4AHOA.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: true,
      hasErrorBoundary: true,
    },
    'routes/chats/guest-info': {
      id: 'routes/chats/guest-info',
      parentId: 'routes/chats',
      path: 'guest-info',
      module: '/build/routes/chats/guest-info-GK24HBIE.js',
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: true,
    },
    'routes/chats/index': {
      id: 'routes/chats/index',
      parentId: 'routes/chats',
      index: true,
      module: '/build/routes/chats/index-XRAXFVSW.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/contact': {
      id: 'routes/contact',
      parentId: 'root',
      path: 'contact',
      module: '/build/routes/contact-HMYH6RCG.js',
      imports: [
        '/build/_shared/chunk-5DRNGXMT.js',
        '/build/_shared/chunk-NOREGQSO.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
      ],
      hasAction: true,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/courses': {
      id: 'routes/courses',
      parentId: 'root',
      path: 'courses',
      module: '/build/routes/courses-HUQ3TTUK.js',
      imports: [
        '/build/_shared/chunk-JVQASZFQ.js',
        '/build/_shared/chunk-6BT5764Y.js',
        '/build/_shared/chunk-H4YBYHAB.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/credits': {
      id: 'routes/credits',
      parentId: 'root',
      path: 'credits',
      module: '/build/routes/credits-FMGCLPHL.js',
      imports: ['/build/_shared/chunk-VU65GJMD.js'],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/discord': {
      id: 'routes/discord',
      parentId: 'root',
      path: 'discord',
      module: '/build/routes/discord-AAQZTGBS.js',
      imports: [
        '/build/_shared/chunk-GTQJJ7P5.js',
        '/build/_shared/chunk-LCMXBSLD.js',
        '/build/_shared/chunk-5SPKJBAC.js',
        '/build/_shared/chunk-JVQASZFQ.js',
        '/build/_shared/chunk-6BT5764Y.js',
        '/build/_shared/chunk-H4YBYHAB.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: true,
    },
    'routes/discord/callback': {
      id: 'routes/discord/callback',
      parentId: 'routes/discord',
      path: 'callback',
      module: '/build/routes/discord/callback-UR3FXA7J.js',
      imports: [
        '/build/_shared/chunk-SCVNOJ5S.js',
        '/build/_shared/chunk-Y2QVQ25D.js',
        '/build/_shared/chunk-O2OCGRZA.js',
        '/build/_shared/chunk-RCM5YQFM.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-23W6YJGQ.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-QJVU7YPY.js',
        '/build/_shared/chunk-MGMCP3PW.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-A6R4AHOA.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/discord/index': {
      id: 'routes/discord/index',
      parentId: 'routes/discord',
      index: true,
      module: '/build/routes/discord/index-YLHUCBFI.js',
      imports: [
        '/build/_shared/chunk-23W6YJGQ.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-QJVU7YPY.js',
        '/build/_shared/chunk-MGMCP3PW.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-A6R4AHOA.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/healthcheck': {
      id: 'routes/healthcheck',
      parentId: 'root',
      path: 'healthcheck',
      module: '/build/routes/healthcheck-B5CRYMYL.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/index': {
      id: 'routes/index',
      parentId: 'root',
      index: true,
      module: '/build/routes/index-Q6RUYL5P.js',
      imports: [
        '/build/_shared/chunk-F2YPVMK5.js',
        '/build/_shared/chunk-H3D3N5SF.js',
        '/build/_shared/chunk-QDSYH2AY.js',
        '/build/_shared/chunk-5SPKJBAC.js',
        '/build/_shared/chunk-W7VEGQGZ.js',
        '/build/_shared/chunk-QYKS7KRI.js',
        '/build/_shared/chunk-6BT5764Y.js',
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: true,
    },
    'routes/login': {
      id: 'routes/login',
      parentId: 'root',
      path: 'login',
      module: '/build/routes/login-DWJ5GHJE.js',
      imports: [
        '/build/_shared/chunk-Y2QVQ25D.js',
        '/build/_shared/chunk-WK4YEX4R.js',
        '/build/_shared/chunk-AUYLHJJM.js',
        '/build/_shared/chunk-LBXDCQPQ.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/magic': {
      id: 'routes/magic',
      parentId: 'root',
      path: 'magic',
      module: '/build/routes/magic-Z6ZQOHTF.js',
      imports: [
        '/build/_shared/chunk-WK4YEX4R.js',
        '/build/_shared/chunk-O2OCGRZA.js',
        '/build/_shared/chunk-WWYPCIUR.js',
        '/build/_shared/chunk-LBXDCQPQ.js',
        '/build/_shared/chunk-SJ325QDX.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/me': {
      id: 'routes/me',
      parentId: 'root',
      path: 'me',
      module: '/build/routes/me-RVBJ6W22.js',
      imports: [
        '/build/_shared/chunk-SCVNOJ5S.js',
        '/build/_shared/chunk-LUEIIGVL.js',
        '/build/_shared/chunk-QDSYH2AY.js',
        '/build/_shared/chunk-5DRNGXMT.js',
        '/build/_shared/chunk-QYKS7KRI.js',
        '/build/_shared/chunk-LBXDCQPQ.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/me.admin': {
      id: 'routes/me.admin',
      parentId: 'root',
      path: 'me/admin',
      module: '/build/routes/me.admin-SNCKRGBT.js',
      imports: [
        '/build/_shared/chunk-LBXDCQPQ.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: true,
    },
    'routes/me/download[.]json': {
      id: 'routes/me/download[.]json',
      parentId: 'routes/me',
      path: 'download.json',
      module: '/build/routes/me/download[.]json-E7P6XX5N.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/prisma-studio': {
      id: 'routes/prisma-studio',
      parentId: 'root',
      path: 'prisma-studio',
      module: '/build/routes/prisma-studio-CGFIQHZK.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/prisma-studio.$': {
      id: 'routes/prisma-studio.$',
      parentId: 'root',
      path: 'prisma-studio/*',
      module: '/build/routes/prisma-studio.$-4LOMGWQS.js',
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/refresh-commit-sha[.]json': {
      id: 'routes/refresh-commit-sha[.]json',
      parentId: 'root',
      path: 'refresh-commit-sha.json',
      module: '/build/routes/refresh-commit-sha[.]json-S556HXPC.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/resources/cache.lru.$cacheKey': {
      id: 'routes/resources/cache.lru.$cacheKey',
      parentId: 'root',
      path: 'resources/cache/lru/:cacheKey',
      module: '/build/routes/resources/cache.lru.$cacheKey-RZR6XTGV.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/resources/cache.sqlite': {
      id: 'routes/resources/cache.sqlite',
      parentId: 'root',
      path: 'resources/cache/sqlite',
      module: '/build/routes/resources/cache.sqlite-NKE5FOOY.js',
      hasAction: true,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/resources/cache.sqlite.$cacheKey': {
      id: 'routes/resources/cache.sqlite.$cacheKey',
      parentId: 'root',
      path: 'resources/cache/sqlite/:cacheKey',
      module: '/build/routes/resources/cache.sqlite.$cacheKey-FEKRXLO7.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/resources/copy-cache': {
      id: 'routes/resources/copy-cache',
      parentId: 'root',
      path: 'resources/copy-cache',
      module: '/build/routes/resources/copy-cache-FQJW225F.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/resources/heapsnapshot': {
      id: 'routes/resources/heapsnapshot',
      parentId: 'root',
      path: 'resources/heapsnapshot',
      module: '/build/routes/resources/heapsnapshot-IE6WIWME.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/resources/promotification': {
      id: 'routes/resources/promotification',
      parentId: 'root',
      path: 'resources/promotification',
      module: '/build/routes/resources/promotification-DKGAVMKH.js',
      hasAction: true,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/resources/search': {
      id: 'routes/resources/search',
      parentId: 'root',
      path: 'resources/search',
      module: '/build/routes/resources/search-FDRPIQRC.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/s.$query': {
      id: 'routes/s.$query',
      parentId: 'root',
      path: 's/:query',
      module: '/build/routes/s.$query-2LRJOUUD.js',
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/signup': {
      id: 'routes/signup',
      parentId: 'root',
      path: 'signup',
      module: '/build/routes/signup-5F5XZKXY.js',
      imports: [
        '/build/_shared/chunk-LUEIIGVL.js',
        '/build/_shared/chunk-WK4YEX4R.js',
        '/build/_shared/chunk-5DRNGXMT.js',
        '/build/_shared/chunk-VU65GJMD.js',
        '/build/_shared/chunk-WWYPCIUR.js',
        '/build/_shared/chunk-LBXDCQPQ.js',
        '/build/_shared/chunk-SJ325QDX.js',
        '/build/_shared/chunk-NAPNZIYV.js',
      ],
      hasAction: true,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/subscribe': {
      id: 'routes/subscribe',
      parentId: 'root',
      path: 'subscribe',
      module: '/build/routes/subscribe-6ABEAGFI.js',
      imports: [
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/talks': {
      id: 'routes/talks',
      parentId: 'root',
      path: 'talks',
      module: '/build/routes/talks-7AAF5NMR.js',
      imports: [
        '/build/_shared/chunk-24YL4M67.js',
        '/build/_shared/chunk-5SPKJBAC.js',
        '/build/_shared/chunk-6BT5764Y.js',
        '/build/_shared/chunk-MJCOHDZW.js',
        '/build/_shared/chunk-NAPNZIYV.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/talks/$slug': {
      id: 'routes/talks/$slug',
      parentId: 'routes/talks',
      path: ':slug',
      module: '/build/routes/talks/$slug-52QW4TTS.js',
      imports: [
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/testimonials': {
      id: 'routes/testimonials',
      parentId: 'root',
      path: 'testimonials',
      module: '/build/routes/testimonials-BK5ATKP4.js',
      imports: [
        '/build/_shared/chunk-H4YBYHAB.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/workshops': {
      id: 'routes/workshops',
      parentId: 'root',
      path: 'workshops',
      module: '/build/routes/workshops-S7QLREMX.js',
      imports: [
        '/build/_shared/chunk-3NVLKJ2J.js',
        '/build/_shared/chunk-JCWG3GLE.js',
        '/build/_shared/chunk-E6UGQ7RR.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    'routes/workshops/$slug': {
      id: 'routes/workshops/$slug',
      parentId: 'routes/workshops',
      path: ':slug',
      module: '/build/routes/workshops/$slug-A2T4NAHV.js',
      imports: [
        '/build/_shared/chunk-LCMXBSLD.js',
        '/build/_shared/chunk-SBOWPJQU.js',
        '/build/_shared/chunk-JVQASZFQ.js',
        '/build/_shared/chunk-FGBPS4B5.js',
        '/build/_shared/chunk-IPCABCS3.js',
        '/build/_shared/chunk-H4YBYHAB.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-23W6YJGQ.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-QJVU7YPY.js',
        '/build/_shared/chunk-MGMCP3PW.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-A6R4AHOA.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: true,
      hasErrorBoundary: false,
    },
    'routes/workshops/index': {
      id: 'routes/workshops/index',
      parentId: 'routes/workshops',
      index: true,
      module: '/build/routes/workshops/index-E2GI2BMI.js',
      imports: [
        '/build/_shared/chunk-5SPKJBAC.js',
        '/build/_shared/chunk-SBOWPJQU.js',
        '/build/_shared/chunk-FGBPS4B5.js',
        '/build/_shared/chunk-6BT5764Y.js',
        '/build/_shared/chunk-MJCOHDZW.js',
        '/build/_shared/chunk-NAPNZIYV.js',
        '/build/_shared/chunk-4GLBS5XR.js',
        '/build/_shared/chunk-435K7F7G.js',
        '/build/_shared/chunk-SGM67EFA.js',
        '/build/_shared/chunk-OQSZKC7R.js',
        '/build/_shared/chunk-DCCPDO22.js',
        '/build/_shared/chunk-D7TFYACY.js',
        '/build/_shared/chunk-LAEJNQLB.js',
        '/build/_shared/chunk-ZPT3S2HK.js',
        '/build/_shared/chunk-YDRVHNLO.js',
        '/build/_shared/chunk-XBOHSII6.js',
      ],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
  },
  url: '/build/manifest-BEC3E4AD.js',
};

function routeLayouts(remixManifest) {
  let routesObj = remixManifest.routes;
  console.log(routesObj);
  // This makes an array of arrays of the keys of the remixManifest broken up into an array based off splitting it up
  // Wherever a '/' is (AKA splitting it by the path). Will reformat this in a bit to work with v2 of remix and all the
  // other route naming conventions
  let myKeys = [];
  for (const key in routesObj) {
    // Root is omitted as root exists in all projects and will be hard coded into tree object
    if (key !== 'root') {
      myKeys.push(key.split(/[/.]/));
    }
  }

  // The newObj which will contain all of our routes. Starts with a root which has children which will house the routes.
  let newObj = {
    name: 'root',
    value: 7.5,
    type: 'grey',
    level: 'grey',
    children: [],
  };

  for (let i = 0; i < myKeys.length; i++) {
    // Whenever we go to a new path we start by parsing through the roots children and go deeper when we need to
    // This is just a string now so it can be manipulated easily later
    let pathString = 'newObj.children';
    for (let j = 0; j < myKeys[i].length; j++) {
      // Now we evaluate the pathString as an actual JS command with eval
      let path = pathString;

      // This checks if in the current path there is an object with a name key with the value of the current route we are on
      // If this is not true we then push the object to the current childrens array
      if (!path.find((e) => e.name === myKeys[i][j])) {
        if (myKeys[i][j].slice(-1) === '_') {
          console.log(myKeys[i][j]);
          console.log(newObj.children);
          newObj.children.push({
            name: myKeys[i][j],
            value: 7.5,
            type: 'white',
            level: 'black',
            children: [],
          });
        } else {
          path.push({
            name: myKeys[i][j],
            value: 7.5,
            type: 'white',
            level: 'black',
            children: [],
          });
        }
      }
      // We then check where in the current children array the object with the path we are on is
      // We save that in numbah!
      let numbah;
      for (let k = 0; k < path.length; k++) {
        if (path[k].name === myKeys[i][j]) {
          numbah = k;
          // Then using numbah and some string manipulation we go deeper into the object by adding that numbah and the .children notation
          // So that when we go back through the second loop again we are now one deeper into it which is what we want.
          pathString = pathString[numbah][children];
        }
      }
    }
  }
  return newObj;
}

let testObj = routeLayouts(testingManifest);

const margin = { top: 10, right: 120, bottom: 10, left: 40 };
const width = d3.width || 960;
const root = d3.hierarchy(testObj);
const dx = 10;
const dy = width / 6;
const tree = d3.tree().nodeSize([dx, dy]);
const diagonal = d3
  .linkHorizontal()
  .x((d) => d.y)
  .y((d) => d.x);

root.x0 = dy / 2;
root.y0 = 0;
root.descendants().forEach((d, i) => {
  d.id = i;
  d._children = d.children;
  // if (d.depth && d.data.name.length !== 7) d.children = null;
});

tree(root);

const svg = d3
  .create('svg')
  .attr('viewBox', [-margin.left, -margin.top, width, dx])
  .style('font', '10px sans-serif')
  .style('user-select', 'none');

const gLink = svg
  .append('g')
  .attr('fill', 'none')
  .attr('stroke', '#555')
  .attr('stroke-opacity', 0.4)
  .attr('stroke-width', 1.5);

const gNode = svg
  .append('g')
  .attr('cursor', 'pointer')
  .attr('pointer-events', 'all');

update(root);

document.querySelector('#app').appendChild(svg.node());

function update(source) {
  const duration = d3.event && d3.event.altKey ? 2500 : 250;
  const nodes = root.descendants().reverse();
  const links = root.links();

  // Compute the new tree layout.

  let left = root;
  let right = root;
  root.eachBefore((node) => {
    if (node.x < left.x) left = node;
    if (node.x > right.x) right = node;
  });

  const height = right.x - left.x + margin.top + margin.bottom;

  const transition = svg
    .transition()
    .duration(duration)
    .attr('viewBox', [-margin.left, left.x - margin.top, width, height])
    .tween(
      'resize',
      window.ResizeObserver ? null : () => () => svg.dispatch('toggle')
    );

  // Update the nodes…
  const node = gNode.selectAll('g').data(nodes, (d) => d.id);

  // Enter any new nodes at the parent's previous position.
  const nodeEnter = node
    .enter()
    .append('g')
    .attr('transform', (d) => `translate(${source.y0},${source.x0})`)
    .attr('fill-opacity', 0)
    .attr('stroke-opacity', 0)
    .on('click', (event, d) => {
      d.children = d.children ? null : d._children;
      update(d);
    });

  nodeEnter
    .append('circle')
    .attr('r', 2.5)
    .attr('fill', (d) => (d._children ? '555' : '999'))
    .attr('stroke-width', 10);

  nodeEnter
    .append('text')
    .attr('dy', '0.31em')
    .attr('x', (d) => (d._children ? -6 : 6))
    .attr('text-anchor', (d) => (d._children ? 'end' : 'start'))
    .text((d) => d.data.name)
    .clone(true)
    .lower()
    .attr('stroke-linejoin', 'round')
    .attr('stroke-width', 3)
    .attr('stroke', 'white');

  // Transition nodes to their new position.
  node
    .merge(nodeEnter)
    .transition(transition)
    .attr('transform', (d) => `translate(${d.y},${d.x})`)
    .attr('fill-opacity', 1)
    .attr('stroke-opacity', 1);

  // Transition exiting nodes to the parent's new position.
  node
    .exit()
    .transition(transition)
    .remove()
    .attr('transform', (d) => `translate(${source.y},${source.x})`)
    .attr('fill-opacity', 0)
    .attr('stroke-opacity', 0);

  // Update the links…
  const link = gLink.selectAll('path').data(links, (d) => d.target.id);

  // Enter any new links at the parent's previous position.
  const linkEnter = link
    .enter()
    .append('path')
    .attr('d', (d) => {
      const o = { x: source.x0, y: source.y0 };
      return diagonal({ source: o, target: o });
    });

  // Transition links to their new position.
  link.merge(linkEnter).transition(transition).attr('d', diagonal);

  // Transition exiting nodes to the parent's new position.
  link
    .exit()
    .transition(transition)
    .remove()
    .attr('d', (d) => {
      const o = { x: source.x, y: source.y };
      return diagonal({ source: o, target: o });
    });

  // Stash the old positions for transition.
  root.eachBefore((d) => {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}
