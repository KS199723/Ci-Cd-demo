public with sharing class accountList 
{
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList() 
    {
    List<Account> acc=[select id, Name, Type, Industry from Account];
    return acc;
    }
}
