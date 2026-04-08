// Service Workerを無効化してキャッシュをクリアする魔法のコード
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => caches.delete(key)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // 何もしない（キャッシュを使わず、常に最新のネット上の画像を見に行く）
});
