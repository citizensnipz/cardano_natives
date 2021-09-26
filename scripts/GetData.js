import React, { useState, useEffect } from 'react';


export default function GetData(page) {

    const [recordData, setRecordData] = useState([]);


    //Airtable config setup
    const Airtable = require('airtable');

    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyAfBPXLYlSGkEpJ'
    });

    const base = new Airtable({apiKey: 'keyAfBPXLYlSGkEpJ'}).base('appPvPRetgqOnD37R');

    //call to get actual data
    if (page == "projects") {
        useEffect(() => {
            base('Projects').select({
                maxRecords: 100,
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                setRecordData(records);

                //fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });

        });
    } else if (page == "tokens") {
        useEffect(() => {
            base('Tokens').select({
                maxRecords: 100,
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                setRecordData(records);

                //fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });

        });
    } else if (page == "nfts") {
        useEffect(() => {
            base('NFTs').select({
                maxRecords: 100,
                view: "Grid view"
            }).eachPage(function page(records, fetchNextPage) {
                setRecordData(records);

                //fetchNextPage();
            }, function done(err) {
                if (err) { console.error(err); return; }
            });

        });
    }


    return (recordData);

};