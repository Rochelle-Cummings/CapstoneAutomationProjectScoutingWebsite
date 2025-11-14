import {$} from '@wdio/globals';
import Page from './page.js'; 

 class AwardsPage extends Page {
    get awardsTab() {
        return $('[href="https://www.scouting.org/awards/"]');
    }
    get awardCentralDropdn() {
        return $('[href="https://www.scouting.org/awards/awards-central/"]');
    }
    get nFirstIndexItem() {
        return $('[href="https://filestore.scouting.org/filestore/pdf/National_Duty_to_God_Award.pdf"]');
    }
    get nSecondIndexItem() {
        return $('[href="/awards/awards-central/national-honor-patrol"]');
    }
    get nThirdIndexItem() {
        return $('[href="/awards/awards-central/national-major-gift"]');
    }
    get nFourthIndexItem() {
        return $('[href="/awards/awards-central/national-medal-outdoor"]');
    }




 }

 export default new AwardsPage(); 