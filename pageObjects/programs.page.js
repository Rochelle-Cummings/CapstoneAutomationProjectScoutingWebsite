import {$} from '@wdio/globals';
import Page from './page.js';   

class ProgramsPage extends Page {
    get programsTab() {
        return $('[href="https://www.scouting.org/programs/"]');
    }
    


}