import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/accountList.getAccList';
export default class WireTest extends LightningElement 
{
    @wire(getAccountList)
    accs;

    renderedCallback() 
    {
      console.log('Data Loaded');
      console.log(JSON.stringify(this.accs));
    }
}

