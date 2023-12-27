sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskMitigation/Risks/test/integration/FirstJourney',
		'RiskMitigation/Risks/test/integration/pages/RisksList',
		'RiskMitigation/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskMitigation/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);