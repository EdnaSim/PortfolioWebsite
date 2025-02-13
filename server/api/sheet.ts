import * as google from 'googleapis';

const spreadsheetId = useRuntimeConfig().secret.sheetId;
const credentials = useRuntimeConfig().secret.credentials; //service account json contents

export default defineEventHandler(async (event: any) =>{
    if (event.method != "POST"){
        return;
    }
    const body = await readBody(event);
    const res = await WriteToSheet(body.name ?? '', body.contact ?? '', body.message);
    return res ?? {statusText:'NOT OK'};
});

async function WriteToSheet(name:string, contact:string, message:string){
    try{
        const client = await GetGoogleSheetClient();
        const res = await client.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'A1:D1',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                "majorDimension": "ROWS",
                values:[[name, contact, message, new Date().toLocaleString("en-GB", { timeZone: "Asia/Singapore" })]]
            },
        });
        return res;
    } catch(e){
        return null;
    }
} 

async function GetGoogleSheetClient(){
    //Authenticate with service account (like login in with a proxy account)
    //https://medium.com/@sakkeerhussainp/google-sheet-as-your-database-for-node-js-backend-a79fc5a6edd9
    //Follow ^this with some modifications (outdated UI)
    const auth = new google.Auth.GoogleAuth({
        credentials: credentials,
        scopes:['https://www.googleapis.com/auth/spreadsheets'],
    });
    const client = await auth.getClient();
    return new google.sheets_v4.Sheets({
        auth: client
    })
}