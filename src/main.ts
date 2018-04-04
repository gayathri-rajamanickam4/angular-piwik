import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const piwikTrackCode = `<script type="text/javascript">
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
//_paq.push(['trackPageView']);https://github.com/angulartics/angulartics2/tree/26a14484bb2a96a70ee759dc286863001b4036b3/src/lib/providers/piwik
_paq.push(['enableLinkTracking']);
(function() {
  var u="${environment.piwikServer}"
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
</script>`;

if (environment.production) {
  enableProdMode();
}

if (environment.piwikServer) {
  document.write(piwikTrackCode);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
