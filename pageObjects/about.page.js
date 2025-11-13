import {$} from '@wdio/globals';
import Page from './page.js';   

class AboutPage extends Page {
    get aboutTab() {
        return $('[href="https://www.scouting.org/about/"]');
    }

}
export default new AboutPage();
