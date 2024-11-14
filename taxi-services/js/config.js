//var hide_empty_list=true; //uncomment this line to hide empty selection lists
var disable_empty_list = true; //uncomment this line to disable empty selection lists

var onclickaction = "goto" //set to "alert" or "goto". Former is for debugging purposes, to tell you the value of the final selected list that will be used as the destination URL. Set to "goto" when below configuration is all set up as desired. 

var newwindow = 0 //Open links in new window or not? 1=yes, 0=no.

/////DEFINE YOUR MENU LISTS and ITEMS below/////////////////

addListGroup("chainedmenu", "First-Select");

addOption("First-Select", "--Select City--", "", 1); //HEADER OPTIO
addList("First-Select", "Bhopal", "", "Bhopal");
addList("First-Select", "Indore", "", "Indore");
addList("First-Select", "Jabalpur", "", "Jabalpur");
addList("First-Select", "Gwalior", "", "Gwalior");
addList("First-Select", "Khajuraho", "", "Khajuraho");
addList("First-Select", "Amarkantak", "", "Amarkantak");
addList("First-Select", "Bhojpur", "", "Bhojpur");
addList("First-Select", "Bandhavgarh", "", "Bandhavgarh");
addList("First-Select", "Bhedaghat", "", "Bhedaghat");
addList("First-Select", "Bhimbetka", "", "Bhimbetka");
addList("First-Select", "Chitrakoot", "", "Chitrakoot");
addList("First-Select", "Chanderi", "", "Chanderi");
addList("First-Select", "Hanuwantiya", "", "Hanuwantiya");
addList("First-Select", "Kanha", "", "Kanha");
addList("First-Select", "Madhai Satpura", "", "Madhai");
addList("First-Select", "Maheshwar", "", "Maheshwar");
addList("First-Select", "Mandu", "", "Mandu");
addList("First-Select", "Orchha", "", "Orchha");
addList("First-Select", "Omkareshwar", "", "Omkareshwar");
addList("First-Select", "Pachmarhi", "", "Pachmarhi");
addList("First-Select", "Panna", "", "Panna");
addList("First-Select", "Pench", "", "Pench");
addList("First-Select", "Shivpuri", "", "Shivpuri");
addList("First-Select", "Sonagiri", "", "Sonagiri");
addList("First-Select", "Sanchi", "", "Sanchi");
addList("First-Select", "Ujjain", "", "Ujjain");
addList("First-Select", "------------------------------", "", "");
addList("First-Select", "Agra", "", "Agra");
addList("First-Select", "Varanasi", "", "Varanasi");
addList("First-Select", "Kota", "", "Kota");
addList("First-Select", "Raipur", "", "Raipur");
addList("First-Select", "Bilaspur", "", "Bilaspur");
addList("First-Select", "Allahabad", "", "Allahabad");
addList("First-Select", "Vadodara", "", "Vadodara");
addList("First-Select", "Jhansi", "", "Jhansi");
addList("First-Select", "Nagpur", "", "Nagpur");
addList("First-Select", "Kanpur", "", "Kanpur");
addList("First-Select", "Nashik", "", "Nashik");
addList("First-Select", "Aurangabad", "", "Aurangabad");
addList("First-Select", "Ahmedabad", "", "Ahmedabad");
addList("First-Select", "Surat", "", "Surat");
addList("First-Select", "Udaipur", "", "Udaipur");
addList("First-Select", "Ambikapur", "", "Ambikapur");

addOption("Bhopal", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Bhopal", "Economy Cars", "", "Economy");
addList("Bhopal", "Executive Cars", "", "Executive");
addList("Bhopal", "SUV'S / Vans", "", "SUV'S");
addList("Bhopal", "Luxury Cars", "", "Luxury");
addList("Bhopal", "Tempo Travellers", "", "Tempo");
addList("Bhopal", "AC Caravans", "", "Caravans");
addList("Bhopal", "NON AC Tourist Coaches", "", "NON Coaches");
addList("Bhopal", "AC Luxury Coaches", "", "AC Coaches");

addOption("Economy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("Economy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/bhopal/alto-800-economy-taxi-service-in-bhopal.php");
addOption("Economy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/bhopal/tata-indigo-economy-taxi-service-in-bhopal.php");

addOption("Executive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("Executive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/bhopal/swift-dezire-executive-taxi-service-in-bhopal.php");
addOption("Executive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/bhopal/toyota-etios-executive-taxi-service-in-bhopal.php");
addOption("Executive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/bhopal/honda-city-and-verna-executive-taxi-service-in-bhopal.php");
addOption("Executive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bhopal/toyota-innova-executive-taxi-service-in-bhopal.php");

addOption("SUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("SUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/bhopal/chevrolet-tavera-suv-taxi-service-in-bhopal.php");
addOption("SUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/bhopal/mahindra-xylo-suv-taxi-service-in-bhopal.php");
addOption("SUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bhopal/toyota-innova-executive-taxi-service-in-bhopal.php");
addOption("SUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/bhopal/toyota-innova-crysta-suv-taxi-service-in-bhopal.php");
addOption("SUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/bhopal/tata-safari-suv-taxi-service-in-bhopal.php");
addOption("SUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bhopal/toyota-fortuner-suv-taxi-service-in-bhopal.php");

addOption("Luxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("Luxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/bhopal/pajero-and-endeavour-luxury-taxi-service-in-bhopal.php");
addOption("Luxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bhopal/toyota-fortuner-suv-taxi-service-in-bhopal.php");
addOption("Luxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/bhopal/camry-and-altis-luxury-taxi-service-in-bhopal.php");
addOption("Luxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/bhopal/skoda-luxury-taxi-service-in-bhopal.php");
addOption("Luxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/bhopal/mercedes-c-class-luxury-taxi-service-in-bhopal.php");
addOption("Luxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/bhopal/mercedes-e-class-luxury-taxi-service-in-bhopal.php");
addOption("Luxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/bhopal/mercedes-s-class-luxury-taxi-service-in-bhopal.php");
addOption("Luxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/bhopal/bmw-x5-or-x7-luxury-taxi-service-in-bhopal.php");
addOption("Luxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/bhopal/mercedes-benz-gls-luxury-taxi-service-in-bhopal.php");

addOption("Tempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("Tempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhopal/13-seater-ac-tempo-traveller-rental-service-in-bhopal.php");
addOption("Tempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhopal/17-seater-ac-tempo-traveller-rental-service-in-bhopal.php");
addOption("Tempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/bhopal/17-seater-urbania-luxury-van-rental-service-in-bhopal.php");
addOption("Tempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhopal/25-seater-ac-tempo-traveller-rental-service-in-bhopal.php");

addOption("Caravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("Caravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/bhopal/small-ac-caravan-3-beded-rental-service-in-bhopal.php");
addOption("Caravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/bhopal/big-ac-caravan-8-beded-rental-service-in-bhopal.php");

addOption("NON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("NON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/24-seater-non-ac-tourist-coach-rental-service-in-bhopal.php");
addOption("NON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/28-seater-non-ac-tourist-coach-rental-service-in-bhopal.php");
addOption("NON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/35-seater-non-ac-tourist-coach-rental-service-in-bhopal.php");
addOption("NON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/40-seater-non-ac-tourist-coach-rental-service-in-bhopal.php");
addOption("NON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/45-seater-non-ac-tourist-coach-rental-service-in-bhopal.php");
addOption("NON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/52-seater-non-ac-tourist-coach-rental-service-in-bhopal.php");

addOption("AC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("AC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/30-seater-ac-luxury-coach-rental-service-in-bhopal.php");
addOption("AC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/35-seater-ac-luxury-coach-rental-service-in-bhopal.php");
addOption("AC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/40-seater-ac-luxury-coach-rental-service-in-bhopal.php");
addOption("AC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bhopal/45-seater-ac-luxury-coach-rental-service-in-bhopal.php");
addOption("AC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/bhopal/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-bhopal.php");

addOption("Indore", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Indore", "Economy Cars", "", "IndoreEconomy");
addList("Indore", "Executive Cars", "", "IndoreExecutive");
addList("Indore", "SUV'S / Vans", "", "IndoreSUV'S");
addList("Indore", "Luxury Cars", "", "IndoreLuxury");
addList("Indore", "Tempo Travellers", "", "IndoreTempo");
addList("Indore", "AC Caravans", "", "IndoreCaravans");
addList("Indore", "NON AC Tourist Coaches", "", "IndoreNON Coaches");
addList("Indore", "AC Luxury Coaches", "", "IndoreAC Coaches");

addOption("IndoreEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("IndoreEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/indore/alto-800-economy-taxi-service-in-indore.php");
addOption("IndoreEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/indore/tata-indigo-economy-taxi-service-in-indore.php");

addOption("IndoreExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("IndoreExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/indore/swift-dezire-executive-taxi-service-in-indore.php");
addOption("IndoreExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/indore/toyota-etios-executive-taxi-service-in-indore.php");
addOption("IndoreExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/indore/honda-city-and-verna-executive-taxi-service-in-indore.php");
addOption("IndoreExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/indore/toyota-innova-executive-taxi-service-in-indore.php");

addOption("IndoreSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("IndoreSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/indore/chevrolet-tavera-suv-taxi-service-in-indore.php");
addOption("IndoreSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/indore/mahindra-xylo-suv-taxi-service-in-indore.php");
addOption("IndoreSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/indore/toyota-innova-executive-taxi-service-in-indore.php");
addOption("IndoreSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/indore/toyota-innova-crysta-suv-taxi-service-in-indore.php");
addOption("IndoreSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/indore/tata-safari-suv-taxi-service-in-indore.php");
addOption("IndoreSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/indore/toyota-fortuner-suv-taxi-service-in-indore.php");

addOption("IndoreLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("IndoreLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/indore/pajero-and-endeavour-luxury-taxi-service-in-indore.php");
addOption("IndoreLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/indore/toyota-fortuner-suv-taxi-service-in-indore.php");
addOption("IndoreLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/indore/camry-and-altis-luxury-taxi-service-in-indore.php");
addOption("IndoreLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/indore/skoda-luxury-taxi-service-in-indore.php");
addOption("IndoreLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/indore/mercedes-c-class-luxury-taxi-service-in-indore.php");
addOption("IndoreLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/indore/mercedes-e-class-luxury-taxi-service-in-indore.php");
addOption("IndoreLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/indore/mercedes-s-class-luxury-taxi-service-in-indore.php");
addOption("IndoreLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/indore/bmw-x5-or-x7-luxury-taxi-service-in-indore.php");
addOption("IndoreLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/indore/mercedes-benz-gls-luxury-taxi-service-in-indore.php");

addOption("IndoreTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("IndoreTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/indore/13-seater-ac-tempo-traveller-rental-service-in-indore.php");
addOption("IndoreTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/indore/17-seater-ac-tempo-traveller-rental-service-in-indore.php");
addOption("IndoreTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/indore/17-seater-urbania-luxury-van-rental-service-in-indore.php");
addOption("IndoreTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/indore/25-seater-ac-tempo-traveller-rental-service-in-indore.php");

addOption("IndoreCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("IndoreCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/indore/small-ac-caravan-3-beded-rental-service-in-indore.php");
addOption("IndoreCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/indore/big-ac-caravan-8-beded-rental-service-in-indore.php");

addOption("IndoreNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("IndoreNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/indore/24-seater-non-ac-tourist-coach-rental-service-in-indore.php");
addOption("IndoreNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/indore/28-seater-non-ac-tourist-coach-rental-service-in-indore.php");
addOption("IndoreNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/indore/35-seater-non-ac-tourist-coach-rental-service-in-indore.php");
addOption("IndoreNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/indore/40-seater-non-ac-tourist-coach-rental-service-in-indore.php");
addOption("IndoreNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/indore/45-seater-non-ac-tourist-coach-rental-service-in-indore.php");
addOption("IndoreNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/indore/52-seater-non-ac-tourist-coach-rental-service-in-indore.php");

addOption("IndoreAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("IndoreAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/indore/30-seater-ac-luxury-coach-rental-service-in-indore.php");
addOption("IndoreAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/indore/35-seater-ac-luxury-coach-rental-service-in-indore.php");
addOption("IndoreAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/indore/40-seater-ac-luxury-coach-rental-service-in-indore.php");
addOption("IndoreAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/indore/45-seater-ac-luxury-coach-rental-service-in-indore.php");
addOption("IndoreAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/indore/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-indore.php");

addOption("Jabalpur", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Jabalpur", "Economy Cars", "", "JabalpurEconomy");
addList("Jabalpur", "Executive Cars", "", "JabalpurExecutive");
addList("Jabalpur", "SUV'S / Vans", "", "JabalpurSUV'S");
addList("Jabalpur", "Luxury Cars", "", "JabalpurLuxury");
addList("Jabalpur", "Tempo Travellers", "", "JabalpurTempo");
addList("Jabalpur", "AC Caravans", "", "JabalpurCaravans");
addList("Jabalpur", "NON AC Tourist Coaches", "", "JabalpurNON Coaches");
addList("Jabalpur", "AC Luxury Coaches", "", "JabalpurAC Coaches");

addOption("JabalpurEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("JabalpurEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/jabalpur/alto-800-economy-taxi-service-in-jabalpur.php");
addOption("JabalpurEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/jabalpur/tata-indigo-economy-taxi-service-in-jabalpur.php");

addOption("JabalpurExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("JabalpurExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/jabalpur/swift-dezire-executive-taxi-service-in-jabalpur.php");
addOption("JabalpurExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/jabalpur/toyota-etios-executive-taxi-service-in-jabalpur.php");
addOption("JabalpurExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/jabalpur/honda-city-and-verna-executive-taxi-service-in-jabalpur.php");
addOption("JabalpurExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/jabalpur/toyota-innova-executive-taxi-service-in-jabalpur.php");

addOption("JabalpurSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("JabalpurSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/jabalpur/chevrolet-tavera-suv-taxi-service-in-jabalpur.php");
addOption("JabalpurSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/jabalpur/mahindra-xylo-suv-taxi-service-in-jabalpur.php");
addOption("JabalpurSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/jabalpur/toyota-innova-executive-taxi-service-in-jabalpur.php");
addOption("JabalpurSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/jabalpur/toyota-innova-crysta-suv-taxi-service-in-jabalpur.php");
addOption("JabalpurSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/jabalpur/tata-safari-suv-taxi-service-in-jabalpur.php");
addOption("JabalpurSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/jabalpur/toyota-fortuner-suv-taxi-service-in-jabalpur.php");

addOption("JabalpurLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("JabalpurLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/jabalpur/pajero-and-endeavour-luxury-taxi-service-in-jabalpur.php");
addOption("JabalpurLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/jabalpur/toyota-fortuner-suv-taxi-service-in-jabalpur.php");
addOption("JabalpurLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/jabalpur/camry-and-altis-luxury-taxi-service-in-jabalpur.php");
addOption("JabalpurLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/jabalpur/skoda-luxury-taxi-service-in-jabalpur.php");
addOption("JabalpurLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/jabalpur/mercedes-c-class-luxury-taxi-service-in-jabalpur.php");
addOption("JabalpurLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/jabalpur/mercedes-e-class-luxury-taxi-service-in-jabalpur.php");
addOption("JabalpurLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/jabalpur/mercedes-s-class-luxury-taxi-service-in-jabalpur.php");
addOption("JabalpurLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/jabalpur/bmw-x5-or-x7-luxury-taxi-service-in-jabalpur.php");
addOption("JabalpurLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/jabalpur/mercedes-benz-gls-luxury-taxi-service-in-jabalpur.php");

addOption("JabalpurTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("JabalpurTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/jabalpur/13-seater-ac-tempo-traveller-rental-service-in-jabalpur.php");
addOption("JabalpurTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/jabalpur/17-seater-ac-tempo-traveller-rental-service-in-jabalpur.php");
addOption("JabalpurTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/jabalpur/17-seater-urbania-luxury-van-rental-service-in-jabalpur.php");
addOption("JabalpurTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/jabalpur/25-seater-ac-tempo-traveller-rental-service-in-jabalpur.php");

addOption("JabalpurCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("JabalpurCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/jabalpur/small-ac-caravan-3-beded-rental-service-in-jabalpur.php");
addOption("JabalpurCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/jabalpur/big-ac-caravan-8-beded-rental-service-in-jabalpur.php");

addOption("JabalpurNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("JabalpurNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/24-seater-non-ac-tourist-coach-rental-service-in-jabalpur.php");
addOption("JabalpurNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/28-seater-non-ac-tourist-coach-rental-service-in-jabalpur.php");
addOption("JabalpurNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/35-seater-non-ac-tourist-coach-rental-service-in-jabalpur.php");
addOption("JabalpurNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/40-seater-non-ac-tourist-coach-rental-service-in-jabalpur.php");
addOption("JabalpurNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/45-seater-non-ac-tourist-coach-rental-service-in-jabalpur.php");
addOption("JabalpurNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/52-seater-non-ac-tourist-coach-rental-service-in-jabalpur.php");

addOption("JabalpurAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("JabalpurAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/30-seater-ac-luxury-coach-rental-service-in-jabalpur.php");
addOption("JabalpurAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/35-seater-ac-luxury-coach-rental-service-in-jabalpur.php");
addOption("JabalpurAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/40-seater-ac-luxury-coach-rental-service-in-jabalpur.php");
addOption("JabalpurAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/jabalpur/45-seater-ac-luxury-coach-rental-service-in-jabalpur.php");
addOption("JabalpurAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/jabalpur/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-jabalpur.php");

addOption("Gwalior", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Gwalior", "Economy Cars", "", "GwaliorEconomy");
addList("Gwalior", "Executive Cars", "", "GwaliorExecutive");
addList("Gwalior", "SUV'S / Vans", "", "GwaliorSUV'S");
addList("Gwalior", "Luxury Cars", "", "GwaliorLuxury");
addList("Gwalior", "Tempo Travellers", "", "GwaliorTempo");
addList("Gwalior", "AC Caravans", "", "GwaliorCaravans");
addList("Gwalior", "NON AC Tourist Coaches", "", "GwaliorNON Coaches");
addList("Gwalior", "AC Luxury Coaches", "", "GwaliorAC Coaches");

addOption("GwaliorEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("GwaliorEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/gwalior/alto-800-economy-taxi-service-in-gwalior.php");
addOption("GwaliorEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/gwalior/tata-indigo-economy-taxi-service-in-gwalior.php");

addOption("GwaliorExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("GwaliorExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/gwalior/swift-dezire-executive-taxi-service-in-gwalior.php");
addOption("GwaliorExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/gwalior/toyota-etios-executive-taxi-service-in-gwalior.php");
addOption("GwaliorExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/gwalior/honda-city-and-verna-executive-taxi-service-in-gwalior.php");
addOption("GwaliorExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/gwalior/toyota-innova-executive-taxi-service-in-gwalior.php");

addOption("GwaliorSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("GwaliorSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/gwalior/chevrolet-tavera-suv-taxi-service-in-gwalior.php");
addOption("GwaliorSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/gwalior/mahindra-xylo-suv-taxi-service-in-gwalior.php");
addOption("GwaliorSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/gwalior/toyota-innova-executive-taxi-service-in-gwalior.php");
addOption("GwaliorSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/gwalior/toyota-innova-crysta-suv-taxi-service-in-gwalior.php");
addOption("GwaliorSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/gwalior/tata-safari-suv-taxi-service-in-gwalior.php");
addOption("GwaliorSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/gwalior/toyota-fortuner-suv-taxi-service-in-gwalior.php");

addOption("GwaliorLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("GwaliorLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/gwalior/pajero-and-endeavour-luxury-taxi-service-in-gwalior.php");
addOption("GwaliorLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/gwalior/toyota-fortuner-suv-taxi-service-in-gwalior.php");
addOption("GwaliorLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/gwalior/camry-and-altis-luxury-taxi-service-in-gwalior.php");
addOption("GwaliorLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/gwalior/skoda-luxury-taxi-service-in-gwalior.php");
addOption("GwaliorLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/gwalior/mercedes-c-class-luxury-taxi-service-in-gwalior.php");
addOption("GwaliorLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/gwalior/mercedes-e-class-luxury-taxi-service-in-gwalior.php");
addOption("GwaliorLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/gwalior/mercedes-s-class-luxury-taxi-service-in-gwalior.php");
addOption("GwaliorLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/gwalior/bmw-x5-or-x7-luxury-taxi-service-in-gwalior.php");
addOption("GwaliorLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/gwalior/mercedes-benz-gls-luxury-taxi-service-in-gwalior.php");

addOption("GwaliorTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("GwaliorTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/gwalior/13-seater-ac-tempo-traveller-rental-service-in-gwalior.php");
addOption("GwaliorTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/gwalior/17-seater-ac-tempo-traveller-rental-service-in-gwalior.php");
addOption("GwaliorTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/gwalior/17-seater-urbania-luxury-van-rental-service-in-gwalior.php");
addOption("GwaliorTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/gwalior/25-seater-ac-tempo-traveller-rental-service-in-gwalior.php");

addOption("GwaliorCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("GwaliorCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/gwalior/small-ac-caravan-3-beded-rental-service-in-gwalior.php");
addOption("GwaliorCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/gwalior/big-ac-caravan-8-beded-rental-service-in-gwalior.php");

addOption("GwaliorNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("GwaliorNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/24-seater-non-ac-tourist-coach-rental-service-in-gwalior.php");
addOption("GwaliorNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/28-seater-non-ac-tourist-coach-rental-service-in-gwalior.php");
addOption("GwaliorNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/35-seater-non-ac-tourist-coach-rental-service-in-gwalior.php");
addOption("GwaliorNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/40-seater-non-ac-tourist-coach-rental-service-in-gwalior.php");
addOption("GwaliorNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/45-seater-non-ac-tourist-coach-rental-service-in-gwalior.php");
addOption("GwaliorNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/52-seater-non-ac-tourist-coach-rental-service-in-gwalior.php");

addOption("GwaliorAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("GwaliorAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/30-seater-ac-luxury-coach-rental-service-in-gwalior.php");
addOption("GwaliorAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/35-seater-ac-luxury-coach-rental-service-in-gwalior.php");
addOption("GwaliorAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/40-seater-ac-luxury-coach-rental-service-in-gwalior.php");
addOption("GwaliorAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/gwalior/45-seater-ac-luxury-coach-rental-service-in-gwalior.php");
addOption("GwaliorAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/gwalior/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-gwalior.php");

addOption("Khajuraho", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Khajuraho", "Economy Cars", "", "KhajurahoEconomy");
addList("Khajuraho", "Executive Cars", "", "KhajurahoExecutive");
addList("Khajuraho", "SUV'S / Vans", "", "KhajurahoSUV'S");
addList("Khajuraho", "Luxury Cars", "", "KhajurahoLuxury");
addList("Khajuraho", "Tempo Travellers", "", "KhajurahoTempo");
addList("Khajuraho", "AC Caravans", "", "KhajurahoCaravans");
addList("Khajuraho", "NON AC Tourist Coaches", "", "KhajurahoNON Coaches");
addList("Khajuraho", "AC Luxury Coaches", "", "KhajurahoAC Coaches");

addOption("KhajurahoEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("KhajurahoEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/khajuraho/alto-800-economy-taxi-service-in-khajuraho.php");
addOption("KhajurahoEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/khajuraho/tata-indigo-economy-taxi-service-in-khajuraho.php");

addOption("KhajurahoExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("KhajurahoExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/khajuraho/swift-dezire-executive-taxi-service-in-khajuraho.php");
addOption("KhajurahoExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/khajuraho/toyota-etios-executive-taxi-service-in-khajuraho.php");
addOption("KhajurahoExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/khajuraho/honda-city-and-verna-executive-taxi-service-in-khajuraho.php");
addOption("KhajurahoExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/khajuraho/toyota-innova-executive-taxi-service-in-khajuraho.php");

addOption("KhajurahoSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("KhajurahoSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/khajuraho/chevrolet-tavera-suv-taxi-service-in-khajuraho.php");
addOption("KhajurahoSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/khajuraho/mahindra-xylo-suv-taxi-service-in-khajuraho.php");
addOption("KhajurahoSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/khajuraho/toyota-innova-executive-taxi-service-in-khajuraho.php");
addOption("KhajurahoSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/khajuraho/toyota-innova-crysta-suv-taxi-service-in-khajuraho.php");
addOption("KhajurahoSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/khajuraho/tata-safari-suv-taxi-service-in-khajuraho.php");
addOption("KhajurahoSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/khajuraho/toyota-fortuner-suv-taxi-service-in-khajuraho.php");

addOption("KhajurahoLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("KhajurahoLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/khajuraho/pajero-and-endeavour-luxury-taxi-service-in-khajuraho.php");
addOption("KhajurahoLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/khajuraho/toyota-fortuner-suv-taxi-service-in-khajuraho.php");
addOption("KhajurahoLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/khajuraho/camry-and-altis-luxury-taxi-service-in-khajuraho.php");
addOption("KhajurahoLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/khajuraho/skoda-luxury-taxi-service-in-khajuraho.php");
addOption("KhajurahoLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/khajuraho/mercedes-c-class-luxury-taxi-service-in-khajuraho.php");
addOption("KhajurahoLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/khajuraho/mercedes-e-class-luxury-taxi-service-in-khajuraho.php");
addOption("KhajurahoLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/khajuraho/mercedes-s-class-luxury-taxi-service-in-khajuraho.php#");
addOption("KhajurahoLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/khajuraho/bmw-x5-or-x7-luxury-taxi-service-in-khajuraho.php");
addOption("KhajurahoLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/khajuraho/mercedes-benz-gls-luxury-taxi-service-in-khajuraho.php");

addOption("KhajurahoTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("KhajurahoTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/khajuraho/13-seater-ac-tempo-traveller-rental-service-in-khajuraho.php");
addOption("KhajurahoTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/khajuraho/17-seater-ac-tempo-traveller-rental-service-in-khajuraho.php");
addOption("KhajurahoTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/khajuraho/17-seater-urbania-luxury-van-rental-service-in-khajuraho.php");
addOption("KhajurahoTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/khajuraho/25-seater-ac-tempo-traveller-rental-service-in-khajuraho.php");

addOption("KhajurahoCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("KhajurahoCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/khajuraho/small-ac-caravan-3-beded-rental-service-in-khajuraho.php");
addOption("KhajurahoCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/khajuraho/big-ac-caravan-8-beded-rental-service-in-khajuraho.php");

addOption("KhajurahoNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("KhajurahoNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/24-seater-non-ac-tourist-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/28-seater-non-ac-tourist-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/35-seater-non-ac-tourist-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/40-seater-non-ac-tourist-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/45-seater-non-ac-tourist-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/52-seater-non-ac-tourist-coach-rental-service-in-khajuraho.php");

addOption("KhajurahoAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("KhajurahoAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/30-seater-ac-luxury-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/35-seater-ac-luxury-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/40-seater-ac-luxury-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/khajuraho/45-seater-ac-luxury-coach-rental-service-in-khajuraho.php");
addOption("KhajurahoAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/khajuraho/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-khajuraho.php");

addOption("Amarkantak", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Amarkantak", "Economy Cars", "", "AmarkantakEconomy");
addList("Amarkantak", "Executive Cars", "", "AmarkantakExecutive");
addList("Amarkantak", "SUV'S / Vans", "", "AmarkantakSUV'S");
addList("Amarkantak", "Luxury Cars", "", "AmarkantakLuxury");
addList("Amarkantak", "Tempo Travellers", "", "AmarkantakTempo");
addList("Amarkantak", "NON AC Tourist Coaches", "", "AmarkantakNON Coaches");
addList("Amarkantak", "AC Luxury Coaches", "", "AmarkantakAC Coaches");

addOption("AmarkantakEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("AmarkantakEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/amarkantak/alto-800-economy-taxi-service-in-amarkantak.php");
addOption("AmarkantakEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/amarkantak/tata-indigo-economy-taxi-service-in-amarkantak.php");

addOption("AmarkantakExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("AmarkantakExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/amarkantak/swift-dezire-executive-taxi-service-in-amarkantak.php");
addOption("AmarkantakExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/amarkantak/toyota-etios-executive-taxi-service-in-amarkantak.php");
addOption("AmarkantakExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/amarkantak/honda-city-and-verna-executive-taxi-service-in-amarkantak.php");
addOption("AmarkantakExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/amarkantak/toyota-innova-executive-taxi-service-in-amarkantak.php");

addOption("AmarkantakSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("AmarkantakSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/amarkantak/chevrolet-tavera-suv-taxi-service-in-amarkantak.php");
addOption("AmarkantakSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/amarkantak/mahindra-xylo-suv-taxi-service-in-amarkantak.php");
addOption("AmarkantakSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/amarkantak/toyota-innova-executive-taxi-service-in-amarkantak.php");
addOption("AmarkantakSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/amarkantak/toyota-innova-crysta-suv-taxi-service-in-amarkantak.php");
addOption("AmarkantakSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/amarkantak/tata-safari-suv-taxi-service-in-amarkantak.php");
addOption("AmarkantakSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/amarkantak/toyota-fortuner-suv-taxi-service-in-amarkantak.php");

addOption("AmarkantakLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("AmarkantakLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/amarkantak/pajero-and-endeavour-luxury-taxi-service-in-amarkantak.php");
addOption("AmarkantakLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/amarkantak/toyota-fortuner-suv-taxi-service-in-amarkantak.php");
addOption("AmarkantakLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/amarkantak/camry-and-altis-luxury-taxi-service-in-amarkantak.php");
addOption("AmarkantakLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/amarkantak/skoda-luxury-taxi-service-in-amarkantak.php");
addOption("AmarkantakLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/amarkantak/mercedes-c-class-luxury-taxi-service-in-amarkantak.php");
addOption("AmarkantakLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/amarkantak/mercedes-e-class-luxury-taxi-service-in-amarkantak.php");
addOption("AmarkantakLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/amarkantak/mercedes-s-class-luxury-taxi-service-in-amarkantak.php#");
addOption("AmarkantakLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/amarkantak/bmw-x5-or-x7-luxury-taxi-service-in-amarkantak.php");
addOption("AmarkantakLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/amarkantak/mercedes-benz-gls-luxury-taxi-service-in-amarkantak.php");

addOption("AmarkantakTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("AmarkantakTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/amarkantak/13-seater-ac-tempo-traveller-rental-service-in-amarkantak.php");
addOption("AmarkantakTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/amarkantak/17-seater-ac-tempo-traveller-rental-service-in-amarkantak.php");
addOption("AmarkantakTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/amarkantak/17-seater-urbania-luxury-van-rental-service-in-amarkantak.php");
addOption("AmarkantakTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/amarkantak/25-seater-ac-tempo-traveller-rental-service-in-amarkantak.php");

addOption("AmarkantakNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("AmarkantakNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/24-seater-non-ac-tourist-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/28-seater-non-ac-tourist-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/35-seater-non-ac-tourist-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/40-seater-non-ac-tourist-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/45-seater-non-ac-tourist-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/52-seater-non-ac-tourist-coach-rental-service-in-amarkantak.php");

addOption("AmarkantakAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("AmarkantakAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/30-seater-ac-luxury-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/35-seater-ac-luxury-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/40-seater-ac-luxury-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/amarkantak/45-seater-ac-luxury-coach-rental-service-in-amarkantak.php");
addOption("AmarkantakAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/amarkantak/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-amarkantak.php");

addOption("Bhojpur", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Bhojpur", "Economy Cars", "", "BhojpurEconomy");
addList("Bhojpur", "Executive Cars", "", "BhojpurExecutive");
addList("Bhojpur", "SUV'S / Vans", "", "BhojpurSUV'S");
addList("Bhojpur", "Luxury Cars", "", "BhojpurLuxury");
addList("Bhojpur", "Tempo Travellers", "", "BhojpurTempo");
addList("Bhojpur", "AC Caravans", "", "BhojpurCaravans");
addList("Bhojpur", "NON AC Tourist Coaches", "", "BhojpurNON Coaches");
addList("Bhojpur", "AC Luxury Coaches", "", "BhojpurAC Coaches");

addOption("BhojpurEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("BhojpurEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/bhojpur/alto-800-economy-taxi-service-in-bhojpur.php");
addOption("BhojpurEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/bhojpur/tata-indigo-economy-taxi-service-in-bhojpur.php");

addOption("BhojpurExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("BhojpurExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/bhojpur/swift-dezire-executive-taxi-service-in-bhojpur.php");
addOption("BhojpurExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/bhojpur/toyota-etios-executive-taxi-service-in-bhojpur.php");
addOption("BhojpurExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/bhojpur/honda-city-and-verna-executive-taxi-service-in-bhojpur.php");
addOption("BhojpurExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bhojpur/toyota-innova-executive-taxi-service-in-bhojpur.php");

addOption("BhojpurSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("BhojpurSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/bhojpur/chevrolet-tavera-suv-taxi-service-in-bhojpur.php");
addOption("BhojpurSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/bhojpur/mahindra-xylo-suv-taxi-service-in-bhojpur.php");
addOption("BhojpurSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bhojpur/toyota-innova-executive-taxi-service-in-bhojpur.php");
addOption("BhojpurSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/bhojpur/toyota-innova-crysta-suv-taxi-service-in-bhojpur.php");
addOption("BhojpurSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/bhojpur/tata-safari-suv-taxi-service-in-bhojpur.php");
addOption("BhojpurSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bhojpur/toyota-fortuner-suv-taxi-service-in-bhojpur.php");

addOption("BhojpurLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("BhojpurLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/bhojpur/pajero-and-endeavour-luxury-taxi-service-in-bhojpur.php");
addOption("BhojpurLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bhojpur/toyota-fortuner-suv-taxi-service-in-bhojpur.php");
addOption("BhojpurLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/bhojpur/camry-and-altis-luxury-taxi-service-in-bhojpur.php");
addOption("BhojpurLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/bhojpur/skoda-luxury-taxi-service-in-bhojpur.php");
addOption("BhojpurLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/bhojpur/mercedes-c-class-luxury-taxi-service-in-bhojpur.php");
addOption("BhojpurLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/bhojpur/mercedes-e-class-luxury-taxi-service-in-bhojpur.php");
addOption("BhojpurLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/bhojpur/mercedes-s-class-luxury-taxi-service-in-bhojpur.php");
addOption("BhojpurLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/bhojpur/bmw-x5-or-x7-luxury-taxi-service-in-bhojpur.php");
addOption("BhojpurLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/bhojpur/mercedes-benz-gls-luxury-taxi-service-in-bhojpur.php");

addOption("BhojpurTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("BhojpurTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhojpur/13-seater-ac-tempo-traveller-rental-service-in-bhojpur.php");
addOption("BhojpurTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhojpur/17-seater-ac-tempo-traveller-rental-service-in-bhojpur.php");
addOption("BhojpurTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/bhojpur/17-seater-urbania-luxury-van-rental-service-in-bhojpur.php");
addOption("BhojpurTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhojpur/25-seater-ac-tempo-traveller-rental-service-in-bhojpur.php");

addOption("BhojpurCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("BhojpurCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/bhojpur/small-ac-caravan-3-beded-rental-service-in-bhojpur.php");
addOption("BhojpurCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/bhojpur/big-ac-caravan-8-beded-rental-service-in-bhojpur.php");

addOption("BhojpurNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("BhojpurNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/24-seater-non-ac-tourist-coach-rental-service-in-bhojpur.php");
addOption("BhojpurNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/28-seater-non-ac-tourist-coach-rental-service-in-bhojpur.php");
addOption("BhojpurNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/35-seater-non-ac-tourist-coach-rental-service-in-bhojpur.php");
addOption("BhojpurNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/40-seater-non-ac-tourist-coach-rental-service-in-bhojpur.php");
addOption("BhojpurNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/45-seater-non-ac-tourist-coach-rental-service-in-bhojpur.php");
addOption("BhojpurNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/52-seater-non-ac-tourist-coach-rental-service-in-bhojpur.php");

addOption("BhojpurAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("BhojpurAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/30-seater-ac-luxury-coach-rental-service-in-bhojpur.php");
addOption("BhojpurAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/35-seater-ac-luxury-coach-rental-service-in-bhojpur.php");
addOption("BhojpurAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/40-seater-ac-luxury-coach-rental-service-in-bhojpur.php");
addOption("BhojpurAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bhojpur/45-seater-ac-luxury-coach-rental-service-in-bhojpur.php");
addOption("BhojpurAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/bhojpur/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-bhojpur.php");

addOption("Bandhavgarh", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Bandhavgarh", "Economy Cars", "", "BandhavgarhEconomy");
addList("Bandhavgarh", "Executive Cars", "", "BandhavgarhExecutive");
addList("Bandhavgarh", "SUV'S / Vans", "", "BandhavgarhSUV'S");
addList("Bandhavgarh", "Luxury Cars", "", "BandhavgarhLuxury");
addList("Bandhavgarh", "Tempo Travellers", "", "BandhavgarhTempo");
addList("Bandhavgarh", "NON AC Tourist Coaches", "", "BandhavgarhNON Coaches");
addList("Bandhavgarh", "AC Luxury Coaches", "", "BandhavgarhAC Coaches");

addOption("BandhavgarhEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("BandhavgarhEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/alto-800-economy-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/tata-indigo-economy-taxi-service-in-bandhavgarh.php");

addOption("BandhavgarhExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("BandhavgarhExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/swift-dezire-executive-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/toyota-etios-executive-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/honda-city-and-verna-executive-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/toyota-innova-executive-taxi-service-in-bandhavgarh.php");

addOption("BandhavgarhSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("BandhavgarhSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/chevrolet-tavera-suv-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/mahindra-xylo-suv-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/toyota-innova-executive-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/toyota-innova-crysta-suv-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/tata-safari-suv-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/toyota-fortuner-suv-taxi-service-in-bandhavgarh.php");

addOption("BandhavgarhLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("BandhavgarhLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/pajero-and-endeavour-luxury-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/toyota-fortuner-suv-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/camry-and-altis-luxury-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/skoda-luxury-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/mercedes-c-class-luxury-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/mercedes-e-class-luxury-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/mercedes-s-class-luxury-taxi-service-in-bandhavgarh.php#");
addOption("BandhavgarhLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/bmw-x5-or-x7-luxury-taxi-service-in-bandhavgarh.php");
addOption("BandhavgarhLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/mercedes-benz-gls-luxury-taxi-service-in-bandhavgarh.php");

addOption("BandhavgarhTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("BandhavgarhTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/13-seater-ac-tempo-traveller-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/17-seater-ac-tempo-traveller-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/17-seater-urbania-luxury-van-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/25-seater-ac-tempo-traveller-rental-service-in-bandhavgarh.php");

addOption("BandhavgarhNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("BandhavgarhNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/24-seater-non-ac-tourist-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/28-seater-non-ac-tourist-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/35-seater-non-ac-tourist-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/40-seater-non-ac-tourist-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/45-seater-non-ac-tourist-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/52-seater-non-ac-tourist-coach-rental-service-in-bandhavgarh.php");

addOption("BandhavgarhAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("BandhavgarhAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/30-seater-ac-luxury-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/35-seater-ac-luxury-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/40-seater-ac-luxury-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/45-seater-ac-luxury-coach-rental-service-in-bandhavgarh.php");
addOption("BandhavgarhAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/bandhavgarh/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-bandhavgarh.php");

addOption("Bhedaghat", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Bhedaghat", "Economy Cars", "", "BhedaghatEconomy");
addList("Bhedaghat", "Executive Cars", "", "BhedaghatExecutive");
addList("Bhedaghat", "SUV'S / Vans", "", "BhedaghatSUV'S");
addList("Bhedaghat", "Luxury Cars", "", "BhedaghatLuxury");
addList("Bhedaghat", "Tempo Travellers", "", "BhedaghatTempo");
addList("Bhedaghat", "AC Caravans", "", "BhedaghatCaravans");
addList("Bhedaghat", "NON AC Tourist Coaches", "", "BhedaghatNON Coaches");
addList("Bhedaghat", "AC Luxury Coaches", "", "BhedaghatAC Coaches");

addOption("BhedaghatEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("BhedaghatEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/bhedaghat/alto-800-economy-taxi-service-in-bhedaghat.php");
addOption("BhedaghatEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/bhedaghat/tata-indigo-economy-taxi-service-in-bhedaghat.php");

addOption("BhedaghatExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("BhedaghatExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/bhedaghat/swift-dezire-executive-taxi-service-in-bhedaghat.php");
addOption("BhedaghatExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/bhedaghat/toyota-etios-executive-taxi-service-in-bhedaghat.php");
addOption("BhedaghatExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/bhedaghat/honda-city-and-verna-executive-taxi-service-in-bhedaghat.php");
addOption("BhedaghatExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bhedaghat/toyota-innova-executive-taxi-service-in-bhedaghat.php");

addOption("BhedaghatSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("BhedaghatSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/bhedaghat/chevrolet-tavera-suv-taxi-service-in-bhedaghat.php");
addOption("BhedaghatSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/bhedaghat/mahindra-xylo-suv-taxi-service-in-bhedaghat.php");
addOption("BhedaghatSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bhedaghat/toyota-innova-executive-taxi-service-in-bhedaghat.php");
addOption("BhedaghatSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/bhedaghat/toyota-innova-crysta-suv-taxi-service-in-bhedaghat.php");
addOption("BhedaghatSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/bhedaghat/tata-safari-suv-taxi-service-in-bhedaghat.php");
addOption("BhedaghatSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bhedaghat/toyota-fortuner-suv-taxi-service-in-bhedaghat.php");

addOption("BhedaghatLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("BhedaghatLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/bhedaghat/pajero-and-endeavour-luxury-taxi-service-in-bhedaghat.php");
addOption("BhedaghatLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bhedaghat/toyota-fortuner-suv-taxi-service-in-bhedaghat.php");
addOption("BhedaghatLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/bhedaghat/camry-and-altis-luxury-taxi-service-in-bhedaghat.php");
addOption("BhedaghatLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/bhedaghat/skoda-luxury-taxi-service-in-bhedaghat.php");
addOption("BhedaghatLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/bhedaghat/mercedes-c-class-luxury-taxi-service-in-bhedaghat.php");
addOption("BhedaghatLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/bhedaghat/mercedes-e-class-luxury-taxi-service-in-bhedaghat.php");
addOption("BhedaghatLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/bhedaghat/mercedes-s-class-luxury-taxi-service-in-bhedaghat.php");
addOption("BhedaghatLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/bhedaghat/bmw-x5-or-x7-luxury-taxi-service-in-bhedaghat.php");
addOption("BhedaghatLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/bhedaghat/mercedes-benz-gls-luxury-taxi-service-in-bhedaghat.php");

addOption("BhedaghatTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("BhedaghatTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhedaghat/13-seater-ac-tempo-traveller-rental-service-in-bhedaghat.php");
addOption("BhedaghatTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhedaghat/17-seater-ac-tempo-traveller-rental-service-in-bhedaghat.php");
addOption("BhedaghatTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/bhedaghat/17-seater-urbania-luxury-van-rental-service-in-bhedaghat.php");
addOption("BhedaghatTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhedaghat/25-seater-ac-tempo-traveller-rental-service-in-bhedaghat.php");

addOption("BhedaghatCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("BhedaghatCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/bhedaghat/small-ac-caravan-3-beded-rental-service-in-bhedaghat.php");
addOption("BhedaghatCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/bhedaghat/big-ac-caravan-8-beded-rental-service-in-bhedaghat.php");

addOption("BhedaghatNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("BhedaghatNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/24-seater-non-ac-tourist-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/28-seater-non-ac-tourist-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/35-seater-non-ac-tourist-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/40-seater-non-ac-tourist-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/45-seater-non-ac-tourist-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/52-seater-non-ac-tourist-coach-rental-service-in-bhedaghat.php");

addOption("BhedaghatAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("BhedaghatAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/30-seater-ac-luxury-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/35-seater-ac-luxury-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/40-seater-ac-luxury-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bhedaghat/45-seater-ac-luxury-coach-rental-service-in-bhedaghat.php");
addOption("BhedaghatAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/bhedaghat/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-bhedaghat.php");

addOption("Bhimbetka", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Bhimbetka", "Economy Cars", "", "BhimbetkaEconomy");
addList("Bhimbetka", "Executive Cars", "", "BhimbetkaExecutive");
addList("Bhimbetka", "SUV'S / Vans", "", "BhimbetkaSUV'S");
addList("Bhimbetka", "Luxury Cars", "", "BhimbetkaLuxury");
addList("Bhimbetka", "Tempo Travellers", "", "BhimbetkaTempo");
addList("Bhimbetka", "AC Caravans", "", "BhimbetkaCaravans");
addList("Bhimbetka", "NON AC Tourist Coaches", "", "BhimbetkaNON Coaches");
addList("Bhimbetka", "AC Luxury Coaches", "", "BhimbetkaAC Coaches");

addOption("BhimbetkaEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("BhimbetkaEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/bhimbetka/alto-800-economy-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/bhimbetka/tata-indigo-economy-taxi-service-in-bhimbetka.php");

addOption("BhimbetkaExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("BhimbetkaExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/bhimbetka/swift-dezire-executive-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/bhimbetka/toyota-etios-executive-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/bhimbetka/honda-city-and-verna-executive-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bhimbetka/toyota-innova-executive-taxi-service-in-bhimbetka.php");

addOption("BhimbetkaSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("BhimbetkaSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/bhimbetka/chevrolet-tavera-suv-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/bhimbetka/mahindra-xylo-suv-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bhimbetka/toyota-innova-executive-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/bhimbetka/toyota-innova-crysta-suv-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/bhimbetka/tata-safari-suv-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bhimbetka/toyota-fortuner-suv-taxi-service-in-bhimbetka.php");

addOption("BhimbetkaLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("BhimbetkaLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/bhimbetka/pajero-and-endeavour-luxury-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bhimbetka/toyota-fortuner-suv-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/bhimbetka/camry-and-altis-luxury-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/bhimbetka/skoda-luxury-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/bhimbetka/mercedes-c-class-luxury-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/bhimbetka/mercedes-e-class-luxury-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/bhimbetka/mercedes-s-class-luxury-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/bhimbetka/bmw-x5-or-x7-luxury-taxi-service-in-bhimbetka.php");
addOption("BhimbetkaLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/bhimbetka/mercedes-benz-gls-luxury-taxi-service-in-bhimbetka.php");

addOption("BhimbetkaTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("BhimbetkaTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhimbetka/13-seater-ac-tempo-traveller-rental-service-in-bhimbetka.php");
addOption("BhimbetkaTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhimbetka/17-seater-ac-tempo-traveller-rental-service-in-bhimbetka.php");
addOption("BhimbetkaTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/bhimbetka/17-seater-urbania-luxury-van-rental-service-in-bhimbetka.php");
addOption("BhimbetkaTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/bhimbetka/25-seater-ac-tempo-traveller-rental-service-in-bhimbetka.php");

addOption("BhimbetkaCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("BhimbetkaCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/bhimbetka/small-ac-caravan-3-beded-rental-service-in-bhimbetka.php");
addOption("BhimbetkaCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/bhimbetka/big-ac-caravan-8-beded-rental-service-in-bhimbetka.php");

addOption("BhimbetkaNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("BhimbetkaNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/24-seater-non-ac-tourist-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/28-seater-non-ac-tourist-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/35-seater-non-ac-tourist-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/40-seater-non-ac-tourist-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/45-seater-non-ac-tourist-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/52-seater-non-ac-tourist-coach-rental-service-in-bhimbetka.php");

addOption("BhimbetkaAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("BhimbetkaAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/30-seater-ac-luxury-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/35-seater-ac-luxury-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/40-seater-ac-luxury-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bhimbetka/45-seater-ac-luxury-coach-rental-service-in-bhimbetka.php");
addOption("BhimbetkaAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/bhimbetka/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-bhimbetka.php");

addOption("Chitrakoot", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Chitrakoot", "Economy Cars", "", "ChitrakootEconomy");
addList("Chitrakoot", "Executive Cars", "", "ChitrakootExecutive");
addList("Chitrakoot", "SUV'S / Vans", "", "ChitrakootSUV'S");
addList("Chitrakoot", "Luxury Cars", "", "ChitrakootLuxury");
addList("Chitrakoot", "Tempo Travellers", "", "ChitrakootTempo");
addList("Chitrakoot", "AC Caravans", "", "ChitrakootCaravans");
addList("Chitrakoot", "NON AC Tourist Coaches", "", "ChitrakootNON Coaches");
addList("Chitrakoot", "AC Luxury Coaches", "", "ChitrakootAC Coaches");

addOption("ChitrakootEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("ChitrakootEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/chitrakoot/alto-800-economy-taxi-service-in-chitrakoot.php");
addOption("ChitrakootEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/chitrakoot/tata-indigo-economy-taxi-service-in-chitrakoot.php");

addOption("ChitrakootExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("ChitrakootExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/chitrakoot/swift-dezire-executive-taxi-service-in-chitrakoot.php");
addOption("ChitrakootExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/chitrakoot/toyota-etios-executive-taxi-service-in-chitrakoot.php");
addOption("ChitrakootExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/chitrakoot/honda-city-and-verna-executive-taxi-service-in-chitrakoot.php");
addOption("ChitrakootExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/chitrakoot/toyota-innova-executive-taxi-service-in-chitrakoot.php");

addOption("ChitrakootSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("ChitrakootSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/chitrakoot/chevrolet-tavera-suv-taxi-service-in-chitrakoot.php");
addOption("ChitrakootSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/chitrakoot/mahindra-xylo-suv-taxi-service-in-chitrakoot.php");
addOption("ChitrakootSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/chitrakoot/toyota-innova-executive-taxi-service-in-chitrakoot.php");
addOption("ChitrakootSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/chitrakoot/toyota-innova-crysta-suv-taxi-service-in-chitrakoot.php");
addOption("ChitrakootSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/chitrakoot/tata-safari-suv-taxi-service-in-chitrakoot.php");
addOption("ChitrakootSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/chitrakoot/toyota-fortuner-suv-taxi-service-in-chitrakoot.php");

addOption("ChitrakootLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("ChitrakootLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/chitrakoot/pajero-and-endeavour-luxury-taxi-service-in-chitrakoot.php");
addOption("ChitrakootLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/chitrakoot/toyota-fortuner-suv-taxi-service-in-chitrakoot.php");
addOption("ChitrakootLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/chitrakoot/camry-and-altis-luxury-taxi-service-in-chitrakoot.php");
addOption("ChitrakootLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/chitrakoot/skoda-luxury-taxi-service-in-chitrakoot.php");
addOption("ChitrakootLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/chitrakoot/mercedes-c-class-luxury-taxi-service-in-chitrakoot.php");
addOption("ChitrakootLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/chitrakoot/mercedes-e-class-luxury-taxi-service-in-chitrakoot.php");
addOption("ChitrakootLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/chitrakoot/mercedes-s-class-luxury-taxi-service-in-chitrakoot.php");
addOption("ChitrakootLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/chitrakoot/bmw-x5-or-x7-luxury-taxi-service-in-chitrakoot.php");
addOption("ChitrakootLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/chitrakoot/mercedes-benz-gls-luxury-taxi-service-in-chitrakoot.php");

addOption("ChitrakootTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("ChitrakootTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/chitrakoot/13-seater-ac-tempo-traveller-rental-service-in-chitrakoot.php");
addOption("ChitrakootTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/chitrakoot/17-seater-ac-tempo-traveller-rental-service-in-chitrakoot.php");
addOption("ChitrakootTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/chitrakoot/17-seater-urbania-luxury-van-rental-service-in-chitrakoot.php");
addOption("ChitrakootTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/chitrakoot/25-seater-ac-tempo-traveller-rental-service-in-chitrakoot.php");

addOption("ChitrakootCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("ChitrakootCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/chitrakoot/small-ac-caravan-3-beded-rental-service-in-chitrakoot.php");
addOption("ChitrakootCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/chitrakoot/big-ac-caravan-8-beded-rental-service-in-chitrakoot.php");

addOption("ChitrakootNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("ChitrakootNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/24-seater-non-ac-tourist-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/28-seater-non-ac-tourist-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/35-seater-non-ac-tourist-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/40-seater-non-ac-tourist-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/45-seater-non-ac-tourist-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/52-seater-non-ac-tourist-coach-rental-service-in-chitrakoot.php");

addOption("ChitrakootAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("ChitrakootAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/30-seater-ac-luxury-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/35-seater-ac-luxury-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/40-seater-ac-luxury-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/chitrakoot/45-seater-ac-luxury-coach-rental-service-in-chitrakoot.php");
addOption("ChitrakootAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/chitrakoot/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-chitrakoot.php");

addOption("Chanderi", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Chanderi", "Economy Cars", "", "ChanderiEconomy");
addList("Chanderi", "Executive Cars", "", "ChanderiExecutive");
addList("Chanderi", "SUV'S / Vans", "", "ChanderiSUV'S");
addList("Chanderi", "Luxury Cars", "", "ChanderiLuxury");
addList("Chanderi", "Tempo Travellers", "", "ChanderiTempo");
addList("Chanderi", "AC Caravans", "", "ChanderiCaravans");
addList("Chanderi", "NON AC Tourist Coaches", "", "ChanderiNON Coaches");
addList("Chanderi", "AC Luxury Coaches", "", "ChanderiAC Coaches");

addOption("ChanderiEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("ChanderiEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/chanderi/alto-800-economy-taxi-service-in-chanderi.php");
addOption("ChanderiEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/chanderi/tata-indigo-economy-taxi-service-in-chanderi.php");

addOption("ChanderiExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("ChanderiExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/chanderi/swift-dezire-executive-taxi-service-in-chanderi.php");
addOption("ChanderiExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/chanderi/toyota-etios-executive-taxi-service-in-chanderi.php");
addOption("ChanderiExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/chanderi/honda-city-and-verna-executive-taxi-service-in-chanderi.php");
addOption("ChanderiExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/chanderi/toyota-innova-executive-taxi-service-in-chanderi.php");

addOption("ChanderiSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("ChanderiSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/chanderi/chevrolet-tavera-suv-taxi-service-in-chanderi.php");
addOption("ChanderiSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/chanderi/mahindra-xylo-suv-taxi-service-in-chanderi.php");
addOption("ChanderiSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/chanderi/toyota-innova-executive-taxi-service-in-chanderi.php");
addOption("ChanderiSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/chanderi/toyota-innova-crysta-suv-taxi-service-in-chanderi.php");
addOption("ChanderiSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/chanderi/tata-safari-suv-taxi-service-in-chanderi.php");
addOption("ChanderiSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/chanderi/toyota-fortuner-suv-taxi-service-in-chanderi.php");

addOption("ChanderiLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("ChanderiLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/chanderi/pajero-and-endeavour-luxury-taxi-service-in-chanderi.php");
addOption("ChanderiLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/chanderi/toyota-fortuner-suv-taxi-service-in-chanderi.php");
addOption("ChanderiLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/chanderi/camry-and-altis-luxury-taxi-service-in-chanderi.php");
addOption("ChanderiLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/chanderi/skoda-luxury-taxi-service-in-chanderi.php");
addOption("ChanderiLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/chanderi/mercedes-c-class-luxury-taxi-service-in-chanderi.php");
addOption("ChanderiLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/chanderi/mercedes-e-class-luxury-taxi-service-in-chanderi.php");
addOption("ChanderiLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/chanderi/mercedes-s-class-luxury-taxi-service-in-chanderi.php");
addOption("ChanderiLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/chanderi/bmw-x5-or-x7-luxury-taxi-service-in-chanderi.php");
addOption("ChanderiLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/chanderi/mercedes-benz-gls-luxury-taxi-service-in-chanderi.php");

addOption("ChanderiTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("ChanderiTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/chanderi/13-seater-ac-tempo-traveller-rental-service-in-chanderi.php");
addOption("ChanderiTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/chanderi/17-seater-ac-tempo-traveller-rental-service-in-chanderi.php");
addOption("ChanderiTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/chanderi/17-seater-urbania-luxury-van-rental-service-in-chanderi.php");
addOption("ChanderiTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/chanderi/25-seater-ac-tempo-traveller-rental-service-in-chanderi.php");

addOption("ChanderiCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("ChanderiCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/chanderi/small-ac-caravan-3-beded-rental-service-in-chanderi.php");
addOption("ChanderiCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/chanderi/big-ac-caravan-8-beded-rental-service-in-chanderi.php");

addOption("ChanderiNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("ChanderiNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/24-seater-non-ac-tourist-coach-rental-service-in-chanderi.php");
addOption("ChanderiNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/28-seater-non-ac-tourist-coach-rental-service-in-chanderi.php");
addOption("ChanderiNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/35-seater-non-ac-tourist-coach-rental-service-in-chanderi.php");
addOption("ChanderiNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/40-seater-non-ac-tourist-coach-rental-service-in-chanderi.php");
addOption("ChanderiNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/45-seater-non-ac-tourist-coach-rental-service-in-chanderi.php");
addOption("ChanderiNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/52-seater-non-ac-tourist-coach-rental-service-in-chanderi.php");

addOption("ChanderiAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("ChanderiAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/30-seater-ac-luxury-coach-rental-service-in-chanderi.php");
addOption("ChanderiAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/35-seater-ac-luxury-coach-rental-service-in-chanderi.php");
addOption("ChanderiAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/40-seater-ac-luxury-coach-rental-service-in-chanderi.php");
addOption("ChanderiAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/chanderi/45-seater-ac-luxury-coach-rental-service-in-chanderi.php");
addOption("ChanderiAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/chanderi/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-chanderi.php");

addOption("Hanuwantiya", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Hanuwantiya", "Economy Cars", "", "HanuwantiyaEconomy");
addList("Hanuwantiya", "Executive Cars", "", "HanuwantiyaExecutive");
addList("Hanuwantiya", "SUV'S / Vans", "", "HanuwantiyaSUV'S");
addList("Hanuwantiya", "Luxury Cars", "", "HanuwantiyaLuxury");
addList("Hanuwantiya", "Tempo Travellers", "", "HanuwantiyaTempo");
addList("Hanuwantiya", "AC Caravans", "", "HanuwantiyaCaravans");
addList("Hanuwantiya", "NON AC Tourist Coaches", "", "HanuwantiyaNON Coaches");
addList("Hanuwantiya", "AC Luxury Coaches", "", "HanuwantiyaAC Coaches");

addOption("HanuwantiyaEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("HanuwantiyaEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/alto-800-economy-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/tata-indigo-economy-taxi-service-in-hanuwantiya.php");

addOption("HanuwantiyaExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("HanuwantiyaExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/swift-dezire-executive-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/toyota-etios-executive-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/honda-city-and-verna-executive-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/toyota-innova-executive-taxi-service-in-hanuwantiya.php");

addOption("HanuwantiyaSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("HanuwantiyaSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/chevrolet-tavera-suv-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/mahindra-xylo-suv-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/toyota-innova-executive-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/toyota-innova-crysta-suv-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/tata-safari-suv-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/toyota-fortuner-suv-taxi-service-in-hanuwantiya.php");

addOption("HanuwantiyaLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("HanuwantiyaLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/pajero-and-endeavour-luxury-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/toyota-fortuner-suv-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/camry-and-altis-luxury-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/skoda-luxury-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/mercedes-c-class-luxury-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/mercedes-e-class-luxury-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/mercedes-s-class-luxury-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/bmw-x5-or-x7-luxury-taxi-service-in-hanuwantiya.php");
addOption("HanuwantiyaLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/mercedes-benz-gls-luxury-taxi-service-in-hanuwantiya.php");

addOption("HanuwantiyaTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("HanuwantiyaTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/13-seater-ac-tempo-traveller-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/17-seater-ac-tempo-traveller-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/17-seater-urbania-luxury-van-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/25-seater-ac-tempo-traveller-rental-service-in-hanuwantiya.php");

addOption("HanuwantiyaCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("HanuwantiyaCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/small-ac-caravan-3-beded-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/big-ac-caravan-8-beded-rental-service-in-hanuwantiya.php");

addOption("HanuwantiyaNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("HanuwantiyaNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/24-seater-non-ac-tourist-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/28-seater-non-ac-tourist-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/35-seater-non-ac-tourist-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/40-seater-non-ac-tourist-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/45-seater-non-ac-tourist-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/52-seater-non-ac-tourist-coach-rental-service-in-hanuwantiya.php");

addOption("HanuwantiyaAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("HanuwantiyaAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/30-seater-ac-luxury-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/35-seater-ac-luxury-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/40-seater-ac-luxury-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/45-seater-ac-luxury-coach-rental-service-in-hanuwantiya.php");
addOption("HanuwantiyaAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/hanuwantiya/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-hanuwantiya.php");

addOption("Kanha", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Kanha", "Economy Cars", "", "KanhaEconomy");
addList("Kanha", "Executive Cars", "", "KanhaExecutive");
addList("Kanha", "SUV'S / Vans", "", "KanhaSUV'S");
addList("Kanha", "Luxury Cars", "", "KanhaLuxury");
addList("Kanha", "Tempo Travellers", "", "KanhaTempo");
addList("Kanha", "NON AC Tourist Coaches", "", "KanhaNON Coaches");
addList("Kanha", "AC Luxury Coaches", "", "KanhaAC Coaches");

addOption("KanhaEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("KanhaEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/kanha/alto-800-economy-taxi-service-in-kanha.php");
addOption("KanhaEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/kanha/tata-indigo-economy-taxi-service-in-kanha.php");

addOption("KanhaExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("KanhaExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/kanha/swift-dezire-executive-taxi-service-in-kanha.php");
addOption("KanhaExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/kanha/toyota-etios-executive-taxi-service-in-kanha.php");
addOption("KanhaExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/kanha/honda-city-and-verna-executive-taxi-service-in-kanha.php");
addOption("KanhaExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/kanha/toyota-innova-executive-taxi-service-in-kanha.php");

addOption("KanhaSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("KanhaSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/kanha/chevrolet-tavera-suv-taxi-service-in-kanha.php");
addOption("KanhaSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/kanha/mahindra-xylo-suv-taxi-service-in-kanha.php");
addOption("KanhaSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/kanha/toyota-innova-executive-taxi-service-in-kanha.php");
addOption("KanhaSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/kanha/toyota-innova-crysta-suv-taxi-service-in-kanha.php");
addOption("KanhaSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/kanha/tata-safari-suv-taxi-service-in-kanha.php");
addOption("KanhaSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/kanha/toyota-fortuner-suv-taxi-service-in-kanha.php");

addOption("KanhaLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("KanhaLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/kanha/pajero-and-endeavour-luxury-taxi-service-in-kanha.php");
addOption("KanhaLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/kanha/toyota-fortuner-suv-taxi-service-in-kanha.php");
addOption("KanhaLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/kanha/camry-and-altis-luxury-taxi-service-in-kanha.php");
addOption("KanhaLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/kanha/skoda-luxury-taxi-service-in-kanha.php");
addOption("KanhaLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/kanha/mercedes-c-class-luxury-taxi-service-in-kanha.php");
addOption("KanhaLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/kanha/mercedes-e-class-luxury-taxi-service-in-kanha.php");
addOption("KanhaLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/kanha/mercedes-s-class-luxury-taxi-service-in-kanha.php#");
addOption("KanhaLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/kanha/bmw-x5-or-x7-luxury-taxi-service-in-kanha.php");
addOption("KanhaLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/kanha/mercedes-benz-gls-luxury-taxi-service-in-kanha.php");

addOption("KanhaTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("KanhaTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/kanha/13-seater-ac-tempo-traveller-rental-service-in-kanha.php");
addOption("KanhaTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/kanha/17-seater-ac-tempo-traveller-rental-service-in-kanha.php");
addOption("KanhaTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/kanha/17-seater-urbania-luxury-van-rental-service-in-kanha.php");
addOption("KanhaTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/kanha/25-seater-ac-tempo-traveller-rental-service-in-kanha.php");

addOption("KanhaNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("KanhaNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/24-seater-non-ac-tourist-coach-rental-service-in-kanha.php");
addOption("KanhaNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/28-seater-non-ac-tourist-coach-rental-service-in-kanha.php");
addOption("KanhaNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/35-seater-non-ac-tourist-coach-rental-service-in-kanha.php");
addOption("KanhaNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/40-seater-non-ac-tourist-coach-rental-service-in-kanha.php");
addOption("KanhaNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/45-seater-non-ac-tourist-coach-rental-service-in-kanha.php");
addOption("KanhaNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/52-seater-non-ac-tourist-coach-rental-service-in-kanha.php");

addOption("KanhaAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("KanhaAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/30-seater-ac-luxury-coach-rental-service-in-kanha.php");
addOption("KanhaAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/35-seater-ac-luxury-coach-rental-service-in-kanha.php");
addOption("KanhaAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/40-seater-ac-luxury-coach-rental-service-in-kanha.php");
addOption("KanhaAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/kanha/45-seater-ac-luxury-coach-rental-service-in-kanha.php");
addOption("KanhaAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/kanha/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-kanha.php");

addOption("Orchha", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Orchha", "Economy Cars", "", "OrchhaEconomy");
addList("Orchha", "Executive Cars", "", "OrchhaExecutive");
addList("Orchha", "SUV'S / Vans", "", "OrchhaSUV'S");
addList("Orchha", "Luxury Cars", "", "OrchhaLuxury");
addList("Orchha", "Tempo Travellers", "", "OrchhaTempo");
addList("Orchha", "AC Caravans", "", "OrchhaCaravans");
addList("Orchha", "NON AC Tourist Coaches", "", "OrchhaNON Coaches");
addList("Orchha", "AC Luxury Coaches", "", "OrchhaAC Coaches");

addOption("OrchhaEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("OrchhaEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/orchha/alto-800-economy-taxi-service-in-orchha.php");
addOption("OrchhaEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/orchha/tata-indigo-economy-taxi-service-in-orchha.php");

addOption("OrchhaExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("OrchhaExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/orchha/swift-dezire-executive-taxi-service-in-orchha.php");
addOption("OrchhaExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/orchha/toyota-etios-executive-taxi-service-in-orchha.php");
addOption("OrchhaExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/orchha/honda-city-and-verna-executive-taxi-service-in-orchha.php");
addOption("OrchhaExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/orchha/toyota-innova-executive-taxi-service-in-orchha.php");

addOption("OrchhaSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("OrchhaSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/orchha/chevrolet-tavera-suv-taxi-service-in-orchha.php");
addOption("OrchhaSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/orchha/mahindra-xylo-suv-taxi-service-in-orchha.php");
addOption("OrchhaSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/orchha/toyota-innova-executive-taxi-service-in-orchha.php");
addOption("OrchhaSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/orchha/toyota-innova-crysta-suv-taxi-service-in-orchha.php");
addOption("OrchhaSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/orchha/tata-safari-suv-taxi-service-in-orchha.php");
addOption("OrchhaSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/orchha/toyota-fortuner-suv-taxi-service-in-orchha.php");

addOption("OrchhaLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("OrchhaLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/orchha/pajero-and-endeavour-luxury-taxi-service-in-orchha.php");
addOption("OrchhaLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/orchha/toyota-fortuner-suv-taxi-service-in-orchha.php");
addOption("OrchhaLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/orchha/camry-and-altis-luxury-taxi-service-in-orchha.php");
addOption("OrchhaLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/orchha/skoda-luxury-taxi-service-in-orchha.php");
addOption("OrchhaLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/orchha/mercedes-c-class-luxury-taxi-service-in-orchha.php");
addOption("OrchhaLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/orchha/mercedes-e-class-luxury-taxi-service-in-orchha.php");
addOption("OrchhaLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/orchha/mercedes-s-class-luxury-taxi-service-in-orchha.php");
addOption("OrchhaLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/orchha/bmw-x5-or-x7-luxury-taxi-service-in-orchha.php");
addOption("OrchhaLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/orchha/mercedes-benz-gls-luxury-taxi-service-in-orchha.php");

addOption("OrchhaTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("OrchhaTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/orchha/13-seater-ac-tempo-traveller-rental-service-in-orchha.php");
addOption("OrchhaTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/orchha/17-seater-ac-tempo-traveller-rental-service-in-orchha.php");
addOption("OrchhaTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/orchha/17-seater-urbania-luxury-van-rental-service-in-orchha.php");
addOption("OrchhaTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/orchha/25-seater-ac-tempo-traveller-rental-service-in-orchha.php");

addOption("OrchhaCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("OrchhaCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/orchha/small-ac-caravan-3-beded-rental-service-in-orchha.php");
addOption("OrchhaCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/orchha/big-ac-caravan-8-beded-rental-service-in-orchha.php");

addOption("OrchhaNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("OrchhaNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/24-seater-non-ac-tourist-coach-rental-service-in-orchha.php");
addOption("OrchhaNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/28-seater-non-ac-tourist-coach-rental-service-in-orchha.php");
addOption("OrchhaNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/35-seater-non-ac-tourist-coach-rental-service-in-orchha.php");
addOption("OrchhaNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/40-seater-non-ac-tourist-coach-rental-service-in-orchha.php");
addOption("OrchhaNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/45-seater-non-ac-tourist-coach-rental-service-in-orchha.php");
addOption("OrchhaNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/52-seater-non-ac-tourist-coach-rental-service-in-orchha.php");

addOption("OrchhaAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("OrchhaAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/30-seater-ac-luxury-coach-rental-service-in-orchha.php");
addOption("OrchhaAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/35-seater-ac-luxury-coach-rental-service-in-orchha.php");
addOption("OrchhaAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/40-seater-ac-luxury-coach-rental-service-in-orchha.php");
addOption("OrchhaAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/orchha/45-seater-ac-luxury-coach-rental-service-in-orchha.php");
addOption("OrchhaAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/orchha/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-orchha.php");

addOption("Omkareshwar", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Omkareshwar", "Economy Cars", "", "OmkareshwarEconomy");
addList("Omkareshwar", "Executive Cars", "", "OmkareshwarExecutive");
addList("Omkareshwar", "SUV'S / Vans", "", "OmkareshwarSUV'S");
addList("Omkareshwar", "Luxury Cars", "", "OmkareshwarLuxury");
addList("Omkareshwar", "Tempo Travellers", "", "OmkareshwarTempo");
addList("Omkareshwar", "AC Caravans", "", "OmkareshwarCaravans");
addList("Omkareshwar", "NON AC Tourist Coaches", "", "OmkareshwarNON Coaches");
addList("Omkareshwar", "AC Luxury Coaches", "", "OmkareshwarAC Coaches");

addOption("OmkareshwarEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("OmkareshwarEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/omkareshwar/alto-800-economy-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/omkareshwar/tata-indigo-economy-taxi-service-in-omkareshwar.php");

addOption("OmkareshwarExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("OmkareshwarExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/omkareshwar/swift-dezire-executive-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/omkareshwar/toyota-etios-executive-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/omkareshwar/honda-city-and-verna-executive-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/omkareshwar/toyota-innova-executive-taxi-service-in-omkareshwar.php");

addOption("OmkareshwarSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("OmkareshwarSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/omkareshwar/chevrolet-tavera-suv-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/omkareshwar/mahindra-xylo-suv-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/omkareshwar/toyota-innova-executive-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/omkareshwar/toyota-innova-crysta-suv-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/omkareshwar/tata-safari-suv-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/omkareshwar/toyota-fortuner-suv-taxi-service-in-omkareshwar.php");

addOption("OmkareshwarLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("OmkareshwarLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/omkareshwar/pajero-and-endeavour-luxury-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/omkareshwar/toyota-fortuner-suv-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/omkareshwar/camry-and-altis-luxury-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/omkareshwar/skoda-luxury-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/omkareshwar/mercedes-c-class-luxury-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/omkareshwar/mercedes-e-class-luxury-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/omkareshwar/mercedes-s-class-luxury-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/omkareshwar/bmw-x5-or-x7-luxury-taxi-service-in-omkareshwar.php");
addOption("OmkareshwarLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/omkareshwar/mercedes-benz-gls-luxury-taxi-service-in-omkareshwar.php");

addOption("OmkareshwarTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("OmkareshwarTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/omkareshwar/13-seater-ac-tempo-traveller-rental-service-in-omkareshwar.php");
addOption("OmkareshwarTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/omkareshwar/17-seater-ac-tempo-traveller-rental-service-in-omkareshwar.php");
addOption("OmkareshwarTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/omkareshwar/17-seater-urbania-luxury-van-rental-service-in-omkareshwar.php");
addOption("OmkareshwarTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/omkareshwar/25-seater-ac-tempo-traveller-rental-service-in-omkareshwar.php");

addOption("OmkareshwarCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("OmkareshwarCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/omkareshwar/small-ac-caravan-3-beded-rental-service-in-omkareshwar.php");
addOption("OmkareshwarCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/omkareshwar/big-ac-caravan-8-beded-rental-service-in-omkareshwar.php");

addOption("OmkareshwarNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("OmkareshwarNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/24-seater-non-ac-tourist-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/28-seater-non-ac-tourist-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/35-seater-non-ac-tourist-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/40-seater-non-ac-tourist-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/45-seater-non-ac-tourist-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/52-seater-non-ac-tourist-coach-rental-service-in-omkareshwar.php");

addOption("OmkareshwarAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("OmkareshwarAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/30-seater-ac-luxury-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/35-seater-ac-luxury-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/40-seater-ac-luxury-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/omkareshwar/45-seater-ac-luxury-coach-rental-service-in-omkareshwar.php");
addOption("OmkareshwarAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/omkareshwar/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-omkareshwar.php");

addOption("Madhai", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Madhai", "Economy Cars", "", "MadhaiEconomy");
addList("Madhai", "Executive Cars", "", "MadhaiExecutive");
addList("Madhai", "SUV'S / Vans", "", "MadhaiSUV'S");
addList("Madhai", "Luxury Cars", "", "MadhaiLuxury");
addList("Madhai", "Tempo Travellers", "", "MadhaiTempo");
addList("Madhai", "AC Caravans", "", "MadhaiCaravans");
addList("Madhai", "NON AC Tourist Coaches", "", "MadhaiNON Coaches");
addList("Madhai", "AC Luxury Coaches", "", "MadhaiAC Coaches");

addOption("MadhaiEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("MadhaiEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/alto-800-economy-taxi-service-in-madhai-satpura.php");
addOption("MadhaiEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/tata-indigo-economy-taxi-service-in-madhai-satpura.php");

addOption("MadhaiExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("MadhaiExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/swift-dezire-executive-taxi-service-in-madhai-satpura.php");
addOption("MadhaiExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/toyota-etios-executive-taxi-service-in-madhai-satpura.php");
addOption("MadhaiExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/honda-city-and-verna-executive-taxi-service-in-madhai-satpura.php");
addOption("MadhaiExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/toyota-innova-executive-taxi-service-in-madhai-satpura.php");

addOption("MadhaiSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("MadhaiSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/chevrolet-tavera-suv-taxi-service-in-madhai-satpura.php");
addOption("MadhaiSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/mahindra-xylo-suv-taxi-service-in-madhai-satpura.php");
addOption("MadhaiSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/toyota-innova-executive-taxi-service-in-madhai-satpura.php");
addOption("MadhaiSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/toyota-innova-crysta-suv-taxi-service-in-madhai-satpura.php");
addOption("MadhaiSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/tata-safari-suv-taxi-service-in-madhai-satpura.php");
addOption("MadhaiSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/toyota-fortuner-suv-taxi-service-in-madhai-satpura.php");

addOption("MadhaiLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("MadhaiLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/pajero-and-endeavour-luxury-taxi-service-in-madhai-satpura.php");
addOption("MadhaiLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/toyota-fortuner-suv-taxi-service-in-madhai-satpura.php");
addOption("MadhaiLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/camry-and-altis-luxury-taxi-service-in-madhai-satpura.php");
addOption("MadhaiLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/skoda-luxury-taxi-service-in-madhai-satpura.php");
addOption("MadhaiLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/mercedes-c-class-luxury-taxi-service-in-madhai-satpura.php");
addOption("MadhaiLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/mercedes-e-class-luxury-taxi-service-in-madhai-satpura.php");
addOption("MadhaiLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/mercedes-s-class-luxury-taxi-service-in-madhai-satpura.php");
addOption("MadhaiLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/bmw-x5-or-x7-luxury-taxi-service-in-madhai-satpura.php");
addOption("MadhaiLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/mercedes-benz-gls-luxury-taxi-service-in-madhai-satpura.php");

addOption("MadhaiTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("MadhaiTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/13-seater-ac-tempo-traveller-rental-service-in-madhai-satpura.php");
addOption("MadhaiTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/17-seater-ac-tempo-traveller-rental-service-in-madhai-satpura.php");
addOption("MadhaiTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/17-seater-urbania-luxury-van-rental-service-in-madhai-satpura.php");
addOption("MadhaiTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/25-seater-ac-tempo-traveller-rental-service-in-madhai-satpura.php");

addOption("MadhaiCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("MadhaiCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/small-ac-caravan-3-beded-rental-service-in-madhai-satpura.php");
addOption("MadhaiCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/big-ac-caravan-8-beded-rental-service-in-madhai-satpura.php");

addOption("MadhaiNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("MadhaiNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/24-seater-non-ac-tourist-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/28-seater-non-ac-tourist-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/35-seater-non-ac-tourist-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/40-seater-non-ac-tourist-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/45-seater-non-ac-tourist-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/52-seater-non-ac-tourist-coach-rental-service-in-madhai-satpura.php");

addOption("MadhaiAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("MadhaiAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/30-seater-ac-luxury-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/35-seater-ac-luxury-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/40-seater-ac-luxury-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/45-seater-ac-luxury-coach-rental-service-in-madhai-satpura.php");
addOption("MadhaiAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/madhai-satpura/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-madhai-satpura.php");

addOption("Maheshwar", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Maheshwar", "Economy Cars", "", "MaheshwarEconomy");
addList("Maheshwar", "Executive Cars", "", "MaheshwarExecutive");
addList("Maheshwar", "SUV'S / Vans", "", "MaheshwarSUV'S");
addList("Maheshwar", "Luxury Cars", "", "MaheshwarLuxury");
addList("Maheshwar", "Tempo Travellers", "", "MaheshwarTempo");
addList("Maheshwar", "AC Caravans", "", "MaheshwarCaravans");
addList("Maheshwar", "NON AC Tourist Coaches", "", "MaheshwarNON Coaches");
addList("Maheshwar", "AC Luxury Coaches", "", "MaheshwarAC Coaches");

addOption("MaheshwarEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("MaheshwarEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/maheshwar/alto-800-economy-taxi-service-in-maheshwar.php");
addOption("MaheshwarEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/maheshwar/tata-indigo-economy-taxi-service-in-maheshwar.php");

addOption("MaheshwarExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("MaheshwarExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/maheshwar/swift-dezire-executive-taxi-service-in-maheshwar.php");
addOption("MaheshwarExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/maheshwar/toyota-etios-executive-taxi-service-in-maheshwar.php");
addOption("MaheshwarExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/maheshwar/honda-city-and-verna-executive-taxi-service-in-maheshwar.php");
addOption("MaheshwarExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/maheshwar/toyota-innova-executive-taxi-service-in-maheshwar.php");

addOption("MaheshwarSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("MaheshwarSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/maheshwar/chevrolet-tavera-suv-taxi-service-in-maheshwar.php");
addOption("MaheshwarSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/maheshwar/mahindra-xylo-suv-taxi-service-in-maheshwar.php");
addOption("MaheshwarSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/maheshwar/toyota-innova-executive-taxi-service-in-maheshwar.php");
addOption("MaheshwarSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/maheshwar/toyota-innova-crysta-suv-taxi-service-in-maheshwar.php");
addOption("MaheshwarSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/maheshwar/tata-safari-suv-taxi-service-in-maheshwar.php");
addOption("MaheshwarSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/maheshwar/toyota-fortuner-suv-taxi-service-in-maheshwar.php");

addOption("MaheshwarLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("MaheshwarLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/maheshwar/pajero-and-endeavour-luxury-taxi-service-in-maheshwar.php");
addOption("MaheshwarLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/maheshwar/toyota-fortuner-suv-taxi-service-in-maheshwar.php");
addOption("MaheshwarLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/maheshwar/camry-and-altis-luxury-taxi-service-in-maheshwar.php");
addOption("MaheshwarLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/maheshwar/skoda-luxury-taxi-service-in-maheshwar.php");
addOption("MaheshwarLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/maheshwar/mercedes-c-class-luxury-taxi-service-in-maheshwar.php");
addOption("MaheshwarLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/maheshwar/mercedes-e-class-luxury-taxi-service-in-maheshwar.php");
addOption("MaheshwarLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/maheshwar/mercedes-s-class-luxury-taxi-service-in-maheshwar.php");
addOption("MaheshwarLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/maheshwar/bmw-x5-or-x7-luxury-taxi-service-in-maheshwar.php");
addOption("MaheshwarLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/maheshwar/mercedes-benz-gls-luxury-taxi-service-in-maheshwar.php");

addOption("MaheshwarTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("MaheshwarTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/maheshwar/13-seater-ac-tempo-traveller-rental-service-in-maheshwar.php");
addOption("MaheshwarTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/maheshwar/17-seater-ac-tempo-traveller-rental-service-in-maheshwar.php");
addOption("MaheshwarTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/maheshwar/17-seater-urbania-luxury-van-rental-service-in-maheshwar.php");
addOption("MaheshwarTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/maheshwar/25-seater-ac-tempo-traveller-rental-service-in-maheshwar.php");

addOption("MaheshwarCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("MaheshwarCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/maheshwar/small-ac-caravan-3-beded-rental-service-in-maheshwar.php");
addOption("MaheshwarCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/maheshwar/big-ac-caravan-8-beded-rental-service-in-maheshwar.php");

addOption("MaheshwarNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("MaheshwarNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/24-seater-non-ac-tourist-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/28-seater-non-ac-tourist-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/35-seater-non-ac-tourist-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/40-seater-non-ac-tourist-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/45-seater-non-ac-tourist-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/52-seater-non-ac-tourist-coach-rental-service-in-maheshwar.php");

addOption("MaheshwarAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("MaheshwarAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/30-seater-ac-luxury-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/35-seater-ac-luxury-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/40-seater-ac-luxury-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/maheshwar/45-seater-ac-luxury-coach-rental-service-in-maheshwar.php");
addOption("MaheshwarAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/maheshwar/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-maheshwar.php");

addOption("Mandu", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Mandu", "Economy Cars", "", "ManduEconomy");
addList("Mandu", "Executive Cars", "", "ManduExecutive");
addList("Mandu", "SUV'S / Vans", "", "ManduSUV'S");
addList("Mandu", "Luxury Cars", "", "ManduLuxury");
addList("Mandu", "Tempo Travellers", "", "ManduTempo");
addList("Mandu", "AC Caravans", "", "ManduCaravans");
addList("Mandu", "NON AC Tourist Coaches", "", "ManduNON Coaches");
addList("Mandu", "AC Luxury Coaches", "", "ManduAC Coaches");

addOption("ManduEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("ManduEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/mandu/alto-800-economy-taxi-service-in-mandu.php");
addOption("ManduEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/mandu/tata-indigo-economy-taxi-service-in-mandu.php");

addOption("ManduExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("ManduExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/mandu/swift-dezire-executive-taxi-service-in-mandu.php");
addOption("ManduExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/mandu/toyota-etios-executive-taxi-service-in-mandu.php");
addOption("ManduExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/mandu/honda-city-and-verna-executive-taxi-service-in-mandu.php");
addOption("ManduExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/mandu/toyota-innova-executive-taxi-service-in-mandu.php");

addOption("ManduSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("ManduSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/mandu/chevrolet-tavera-suv-taxi-service-in-mandu.php");
addOption("ManduSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/mandu/mahindra-xylo-suv-taxi-service-in-mandu.php");
addOption("ManduSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/mandu/toyota-innova-executive-taxi-service-in-mandu.php");
addOption("ManduSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/mandu/toyota-innova-crysta-suv-taxi-service-in-mandu.php");
addOption("ManduSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/mandu/tata-safari-suv-taxi-service-in-mandu.php");
addOption("ManduSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/mandu/toyota-fortuner-suv-taxi-service-in-mandu.php");

addOption("ManduLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("ManduLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/mandu/pajero-and-endeavour-luxury-taxi-service-in-mandu.php");
addOption("ManduLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/mandu/toyota-fortuner-suv-taxi-service-in-mandu.php");
addOption("ManduLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/mandu/camry-and-altis-luxury-taxi-service-in-mandu.php");
addOption("ManduLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/mandu/skoda-luxury-taxi-service-in-mandu.php");
addOption("ManduLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/mandu/mercedes-c-class-luxury-taxi-service-in-mandu.php");
addOption("ManduLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/mandu/mercedes-e-class-luxury-taxi-service-in-mandu.php");
addOption("ManduLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/mandu/mercedes-s-class-luxury-taxi-service-in-mandu.php");
addOption("ManduLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/mandu/bmw-x5-or-x7-luxury-taxi-service-in-mandu.php");
addOption("ManduLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/mandu/mercedes-benz-gls-luxury-taxi-service-in-mandu.php");

addOption("ManduTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("ManduTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/mandu/13-seater-ac-tempo-traveller-rental-service-in-mandu.php");
addOption("ManduTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/mandu/17-seater-ac-tempo-traveller-rental-service-in-mandu.php");
addOption("ManduTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/mandu/17-seater-urbania-luxury-van-rental-service-in-mandu.php");
addOption("ManduTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/mandu/25-seater-ac-tempo-traveller-rental-service-in-mandu.php");

addOption("ManduCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("ManduCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/mandu/small-ac-caravan-3-beded-rental-service-in-mandu.php");
addOption("ManduCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/mandu/big-ac-caravan-8-beded-rental-service-in-mandu.php");

addOption("ManduNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("ManduNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/24-seater-non-ac-tourist-coach-rental-service-in-mandu.php");
addOption("ManduNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/28-seater-non-ac-tourist-coach-rental-service-in-mandu.php");
addOption("ManduNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/35-seater-non-ac-tourist-coach-rental-service-in-mandu.php");
addOption("ManduNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/40-seater-non-ac-tourist-coach-rental-service-in-mandu.php");
addOption("ManduNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/45-seater-non-ac-tourist-coach-rental-service-in-mandu.php");
addOption("ManduNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/52-seater-non-ac-tourist-coach-rental-service-in-mandu.php");

addOption("ManduAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("ManduAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/30-seater-ac-luxury-coach-rental-service-in-mandu.php");
addOption("ManduAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/35-seater-ac-luxury-coach-rental-service-in-mandu.php");
addOption("ManduAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/40-seater-ac-luxury-coach-rental-service-in-mandu.php");
addOption("ManduAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/mandu/45-seater-ac-luxury-coach-rental-service-in-mandu.php");
addOption("ManduAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/mandu/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-mandu.php");

addOption("Pachmarhi", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Pachmarhi", "Economy Cars", "", "PachmarhiEconomy");
addList("Pachmarhi", "Executive Cars", "", "PachmarhiExecutive");
addList("Pachmarhi", "SUV'S / Vans", "", "PachmarhiSUV'S");
addList("Pachmarhi", "Luxury Cars", "", "PachmarhiLuxury");
addList("Pachmarhi", "Tempo Travellers", "", "PachmarhiTempo");
addList("Pachmarhi", "AC Caravans", "", "PachmarhiCaravans");
addList("Pachmarhi", "NON AC Tourist Coaches", "", "PachmarhiNON Coaches");
addList("Pachmarhi", "AC Luxury Coaches", "", "PachmarhiAC Coaches");

addOption("PachmarhiEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("PachmarhiEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/pachmarhi/alto-800-economy-taxi-service-in-pachmarhi.php");
addOption("PachmarhiEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/pachmarhi/tata-indigo-economy-taxi-service-in-pachmarhi.php");

addOption("PachmarhiExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("PachmarhiExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/pachmarhi/swift-dezire-executive-taxi-service-in-pachmarhi.php");
addOption("PachmarhiExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/pachmarhi/toyota-etios-executive-taxi-service-in-pachmarhi.php");
addOption("PachmarhiExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/pachmarhi/honda-city-and-verna-executive-taxi-service-in-pachmarhi.php");
addOption("PachmarhiExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/pachmarhi/toyota-innova-executive-taxi-service-in-pachmarhi.php");

addOption("PachmarhiSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("PachmarhiSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/pachmarhi/chevrolet-tavera-suv-taxi-service-in-pachmarhi.php");
addOption("PachmarhiSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/pachmarhi/mahindra-xylo-suv-taxi-service-in-pachmarhi.php");
addOption("PachmarhiSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/pachmarhi/toyota-innova-executive-taxi-service-in-pachmarhi.php");
addOption("PachmarhiSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/pachmarhi/toyota-innova-crysta-suv-taxi-service-in-pachmarhi.php");
addOption("PachmarhiSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/pachmarhi/tata-safari-suv-taxi-service-in-pachmarhi.php");
addOption("PachmarhiSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/pachmarhi/toyota-fortuner-suv-taxi-service-in-pachmarhi.php");

addOption("PachmarhiLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("PachmarhiLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/pachmarhi/pajero-and-endeavour-luxury-taxi-service-in-pachmarhi.php");
addOption("PachmarhiLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/pachmarhi/toyota-fortuner-suv-taxi-service-in-pachmarhi.php");
addOption("PachmarhiLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/pachmarhi/camry-and-altis-luxury-taxi-service-in-pachmarhi.php");
addOption("PachmarhiLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/pachmarhi/skoda-luxury-taxi-service-in-pachmarhi.php");
addOption("PachmarhiLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/pachmarhi/mercedes-c-class-luxury-taxi-service-in-pachmarhi.php");
addOption("PachmarhiLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/pachmarhi/mercedes-e-class-luxury-taxi-service-in-pachmarhi.php");
addOption("PachmarhiLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/pachmarhi/mercedes-s-class-luxury-taxi-service-in-pachmarhi.php");
addOption("PachmarhiLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/pachmarhi/bmw-x5-or-x7-luxury-taxi-service-in-pachmarhi.php");
addOption("PachmarhiLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/pachmarhi/mercedes-benz-gls-luxury-taxi-service-in-pachmarhi.php");

addOption("PachmarhiTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("PachmarhiTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/pachmarhi/13-seater-ac-tempo-traveller-rental-service-in-pachmarhi.php");
addOption("PachmarhiTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/pachmarhi/17-seater-ac-tempo-traveller-rental-service-in-pachmarhi.php");
addOption("PachmarhiTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/pachmarhi/17-seater-urbania-luxury-van-rental-service-in-pachmarhi.php");
addOption("PachmarhiTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/pachmarhi/25-seater-ac-tempo-traveller-rental-service-in-pachmarhi.php");

addOption("PachmarhiCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("PachmarhiCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/pachmarhi/small-ac-caravan-3-beded-rental-service-in-pachmarhi.php");
addOption("PachmarhiCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/pachmarhi/big-ac-caravan-8-beded-rental-service-in-pachmarhi.php");

addOption("PachmarhiNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("PachmarhiNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/24-seater-non-ac-tourist-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/28-seater-non-ac-tourist-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/35-seater-non-ac-tourist-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/40-seater-non-ac-tourist-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/45-seater-non-ac-tourist-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/52-seater-non-ac-tourist-coach-rental-service-in-pachmarhi.php");

addOption("PachmarhiAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("PachmarhiAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/30-seater-ac-luxury-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/35-seater-ac-luxury-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/40-seater-ac-luxury-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/pachmarhi/45-seater-ac-luxury-coach-rental-service-in-pachmarhi.php");
addOption("PachmarhiAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/pachmarhi/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-pachmarhi.php");

addOption("Panna", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Panna", "Economy Cars", "", "PannaEconomy");
addList("Panna", "Executive Cars", "", "PannaExecutive");
addList("Panna", "SUV'S / Vans", "", "PannaSUV'S");
addList("Panna", "Luxury Cars", "", "PannaLuxury");
addList("Panna", "Tempo Travellers", "", "PannaTempo");
addList("Panna", "NON AC Tourist Coaches", "", "PannaNON Coaches");
addList("Panna", "AC Luxury Coaches", "", "PannaAC Coaches");

addOption("PannaEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("PannaEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/panna/alto-800-economy-taxi-service-in-panna.php");
addOption("PannaEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/panna/tata-indigo-economy-taxi-service-in-panna.php");

addOption("PannaExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("PannaExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/panna/swift-dezire-executive-taxi-service-in-panna.php");
addOption("PannaExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/panna/toyota-etios-executive-taxi-service-in-panna.php");
addOption("PannaExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/panna/honda-city-and-verna-executive-taxi-service-in-panna.php");
addOption("PannaExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/panna/toyota-innova-executive-taxi-service-in-panna.php");

addOption("PannaSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("PannaSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/panna/chevrolet-tavera-suv-taxi-service-in-panna.php");
addOption("PannaSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/panna/mahindra-xylo-suv-taxi-service-in-panna.php");
addOption("PannaSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/panna/toyota-innova-executive-taxi-service-in-panna.php");
addOption("PannaSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/panna/toyota-innova-crysta-suv-taxi-service-in-panna.php");
addOption("PannaSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/panna/tata-safari-suv-taxi-service-in-panna.php");
addOption("PannaSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/panna/toyota-fortuner-suv-taxi-service-in-panna.php");

addOption("PannaLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("PannaLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/panna/pajero-and-endeavour-luxury-taxi-service-in-panna.php");
addOption("PannaLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/panna/toyota-fortuner-suv-taxi-service-in-panna.php");
addOption("PannaLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/panna/camry-and-altis-luxury-taxi-service-in-panna.php");
addOption("PannaLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/panna/skoda-luxury-taxi-service-in-panna.php");
addOption("PannaLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/panna/mercedes-c-class-luxury-taxi-service-in-panna.php");
addOption("PannaLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/panna/mercedes-e-class-luxury-taxi-service-in-panna.php");
addOption("PannaLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/panna/mercedes-s-class-luxury-taxi-service-in-panna.php#");
addOption("PannaLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/panna/bmw-x5-or-x7-luxury-taxi-service-in-panna.php");
addOption("PannaLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/panna/mercedes-benz-gls-luxury-taxi-service-in-panna.php");

addOption("PannaTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("PannaTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/panna/13-seater-ac-tempo-traveller-rental-service-in-panna.php");
addOption("PannaTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/panna/17-seater-ac-tempo-traveller-rental-service-in-panna.php");
addOption("PannaTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/panna/17-seater-urbania-luxury-van-rental-service-in-panna.php");
addOption("PannaTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/panna/25-seater-ac-tempo-traveller-rental-service-in-panna.php");

addOption("PannaNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("PannaNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/panna/24-seater-non-ac-tourist-coach-rental-service-in-panna.php");
addOption("PannaNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/panna/28-seater-non-ac-tourist-coach-rental-service-in-panna.php");
addOption("PannaNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/panna/35-seater-non-ac-tourist-coach-rental-service-in-panna.php");
addOption("PannaNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/panna/40-seater-non-ac-tourist-coach-rental-service-in-panna.php");
addOption("PannaNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/panna/45-seater-non-ac-tourist-coach-rental-service-in-panna.php");
addOption("PannaNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/panna/52-seater-non-ac-tourist-coach-rental-service-in-panna.php");

addOption("PannaAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("PannaAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/panna/30-seater-ac-luxury-coach-rental-service-in-panna.php");
addOption("PannaAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/panna/35-seater-ac-luxury-coach-rental-service-in-panna.php");
addOption("PannaAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/panna/40-seater-ac-luxury-coach-rental-service-in-panna.php");
addOption("PannaAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/panna/45-seater-ac-luxury-coach-rental-service-in-panna.php");
addOption("PannaAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/panna/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-panna.php");

addOption("Pench", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Pench", "Economy Cars", "", "PenchEconomy");
addList("Pench", "Executive Cars", "", "PenchExecutive");
addList("Pench", "SUV'S / Vans", "", "PenchSUV'S");
addList("Pench", "Luxury Cars", "", "PenchLuxury");
addList("Pench", "Tempo Travellers", "", "PenchTempo");
addList("Pench", "NON AC Tourist Coaches", "", "PenchNON Coaches");
addList("Pench", "AC Luxury Coaches", "", "PenchAC Coaches");

addOption("PenchEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("PenchEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/pench/alto-800-economy-taxi-service-in-pench.php");
addOption("PenchEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/pench/tata-indigo-economy-taxi-service-in-pench.php");

addOption("PenchExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("PenchExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/pench/swift-dezire-executive-taxi-service-in-pench.php");
addOption("PenchExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/pench/toyota-etios-executive-taxi-service-in-pench.php");
addOption("PenchExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/pench/honda-city-and-verna-executive-taxi-service-in-pench.php");
addOption("PenchExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/pench/toyota-innova-executive-taxi-service-in-pench.php");

addOption("PenchSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("PenchSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/pench/chevrolet-tavera-suv-taxi-service-in-pench.php");
addOption("PenchSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/pench/mahindra-xylo-suv-taxi-service-in-pench.php");
addOption("PenchSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/pench/toyota-innova-executive-taxi-service-in-pench.php");
addOption("PenchSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/pench/toyota-innova-crysta-suv-taxi-service-in-pench.php");
addOption("PenchSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/pench/tata-safari-suv-taxi-service-in-pench.php");
addOption("PenchSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/pench/toyota-fortuner-suv-taxi-service-in-pench.php");

addOption("PenchLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("PenchLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/pench/pajero-and-endeavour-luxury-taxi-service-in-pench.php");
addOption("PenchLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/pench/toyota-fortuner-suv-taxi-service-in-pench.php");
addOption("PenchLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/pench/camry-and-altis-luxury-taxi-service-in-pench.php");
addOption("PenchLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/pench/skoda-luxury-taxi-service-in-pench.php");
addOption("PenchLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/pench/mercedes-c-class-luxury-taxi-service-in-pench.php");
addOption("PenchLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/pench/mercedes-e-class-luxury-taxi-service-in-pench.php");
addOption("PenchLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/pench/mercedes-s-class-luxury-taxi-service-in-pench.php#");
addOption("PenchLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/pench/bmw-x5-or-x7-luxury-taxi-service-in-pench.php");
addOption("PenchLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/pench/mercedes-benz-gls-luxury-taxi-service-in-pench.php");

addOption("PenchTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("PenchTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/pench/13-seater-ac-tempo-traveller-rental-service-in-pench.php");
addOption("PenchTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/pench/17-seater-ac-tempo-traveller-rental-service-in-pench.php");
addOption("PenchTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/pench/17-seater-urbania-luxury-van-rental-service-in-pench.php");
addOption("PenchTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/pench/25-seater-ac-tempo-traveller-rental-service-in-pench.php");

addOption("PenchNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("PenchNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/pench/24-seater-non-ac-tourist-coach-rental-service-in-pench.php");
addOption("PenchNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/pench/28-seater-non-ac-tourist-coach-rental-service-in-pench.php");
addOption("PenchNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/pench/35-seater-non-ac-tourist-coach-rental-service-in-pench.php");
addOption("PenchNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/pench/40-seater-non-ac-tourist-coach-rental-service-in-pench.php");
addOption("PenchNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/pench/45-seater-non-ac-tourist-coach-rental-service-in-pench.php");
addOption("PenchNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/pench/52-seater-non-ac-tourist-coach-rental-service-in-pench.php");

addOption("PenchAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("PenchAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/pench/30-seater-ac-luxury-coach-rental-service-in-pench.php");
addOption("PenchAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/pench/35-seater-ac-luxury-coach-rental-service-in-pench.php");
addOption("PenchAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/pench/40-seater-ac-luxury-coach-rental-service-in-pench.php");
addOption("PenchAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/pench/45-seater-ac-luxury-coach-rental-service-in-pench.php");
addOption("PenchAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/pench/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-pench.php");

addOption("Sonagiri", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Shivpuri", "Economy Cars", "", "ShivpuriEconomy");
addList("Shivpuri", "Executive Cars", "", "ShivpuriExecutive");
addList("Shivpuri", "SUV'S / Vans", "", "ShivpuriSUV'S");
addList("Shivpuri", "Luxury Cars", "", "ShivpuriLuxury");
addList("Shivpuri", "Tempo Travellers", "", "ShivpuriTempo");
addList("Shivpuri", "AC Caravans", "", "ShivpuriCaravans");
addList("Shivpuri", "NON AC Tourist Coaches", "", "ShivpuriNON Coaches");
addList("Shivpuri", "AC Luxury Coaches", "", "ShivpuriAC Coaches");

addOption("ShivpuriEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("ShivpuriEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/shivpuri/alto-800-economy-taxi-service-in-shivpuri.php");
addOption("ShivpuriEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/shivpuri/tata-indigo-economy-taxi-service-in-shivpuri.php");

addOption("ShivpuriExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("ShivpuriExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/shivpuri/swift-dezire-executive-taxi-service-in-shivpuri.php");
addOption("ShivpuriExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/shivpuri/toyota-etios-executive-taxi-service-in-shivpuri.php");
addOption("ShivpuriExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/shivpuri/honda-city-and-verna-executive-taxi-service-in-shivpuri.php");
addOption("ShivpuriExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/shivpuri/toyota-innova-executive-taxi-service-in-shivpuri.php");

addOption("ShivpuriSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("ShivpuriSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/shivpuri/chevrolet-tavera-suv-taxi-service-in-shivpuri.php");
addOption("ShivpuriSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/shivpuri/mahindra-xylo-suv-taxi-service-in-shivpuri.php");
addOption("ShivpuriSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/shivpuri/toyota-innova-executive-taxi-service-in-shivpuri.php");
addOption("ShivpuriSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/shivpuri/toyota-innova-crysta-suv-taxi-service-in-shivpuri.php");
addOption("ShivpuriSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/shivpuri/tata-safari-suv-taxi-service-in-shivpuri.php");
addOption("ShivpuriSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/shivpuri/toyota-fortuner-suv-taxi-service-in-shivpuri.php");

addOption("ShivpuriLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("ShivpuriLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/shivpuri/pajero-and-endeavour-luxury-taxi-service-in-shivpuri.php");
addOption("ShivpuriLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/shivpuri/toyota-fortuner-suv-taxi-service-in-shivpuri.php");
addOption("ShivpuriLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/shivpuri/camry-and-altis-luxury-taxi-service-in-shivpuri.php");
addOption("ShivpuriLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/shivpuri/skoda-luxury-taxi-service-in-shivpuri.php");
addOption("ShivpuriLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/shivpuri/mercedes-c-class-luxury-taxi-service-in-shivpuri.php");
addOption("ShivpuriLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/shivpuri/mercedes-e-class-luxury-taxi-service-in-shivpuri.php");
addOption("ShivpuriLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/shivpuri/mercedes-s-class-luxury-taxi-service-in-shivpuri.php");
addOption("ShivpuriLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/shivpuri/bmw-x5-or-x7-luxury-taxi-service-in-shivpuri.php");
addOption("ShivpuriLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/shivpuri/mercedes-benz-gls-luxury-taxi-service-in-shivpuri.php");

addOption("ShivpuriTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("ShivpuriTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/shivpuri/13-seater-ac-tempo-traveller-rental-service-in-shivpuri.php");
addOption("ShivpuriTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/shivpuri/17-seater-ac-tempo-traveller-rental-service-in-shivpuri.php");
addOption("ShivpuriTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/shivpuri/17-seater-urbania-luxury-van-rental-service-in-shivpuri.php");
addOption("ShivpuriTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/shivpuri/25-seater-ac-tempo-traveller-rental-service-in-shivpuri.php");

addOption("ShivpuriCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("ShivpuriCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/shivpuri/small-ac-caravan-3-beded-rental-service-in-shivpuri.php");
addOption("ShivpuriCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/shivpuri/big-ac-caravan-8-beded-rental-service-in-shivpuri.php");

addOption("ShivpuriNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("ShivpuriNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/24-seater-non-ac-tourist-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/28-seater-non-ac-tourist-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/35-seater-non-ac-tourist-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/40-seater-non-ac-tourist-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/45-seater-non-ac-tourist-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/52-seater-non-ac-tourist-coach-rental-service-in-shivpuri.php");

addOption("ShivpuriAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("ShivpuriAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/30-seater-ac-luxury-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/35-seater-ac-luxury-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/40-seater-ac-luxury-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/shivpuri/45-seater-ac-luxury-coach-rental-service-in-shivpuri.php");
addOption("ShivpuriAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/shivpuri/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-shivpuri.php");

addOption("Sonagiri", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Sonagiri", "Economy Cars", "", "SonagiriEconomy");
addList("Sonagiri", "Executive Cars", "", "SonagiriExecutive");
addList("Sonagiri", "SUV'S / Vans", "", "SonagiriSUV'S");
addList("Sonagiri", "Luxury Cars", "", "SonagiriLuxury");
addList("Sonagiri", "Tempo Travellers", "", "SonagiriTempo");
addList("Sonagiri", "AC Caravans", "", "SonagiriCaravans");
addList("Sonagiri", "NON AC Tourist Coaches", "", "SonagiriNON Coaches");
addList("Sonagiri", "AC Luxury Coaches", "", "SonagiriAC Coaches");

addOption("SonagiriEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("SonagiriEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/sonagiri/alto-800-economy-taxi-service-in-sonagiri.php");
addOption("SonagiriEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/sonagiri/tata-indigo-economy-taxi-service-in-sonagiri.php");

addOption("SonagiriExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("SonagiriExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/sonagiri/swift-dezire-executive-taxi-service-in-sonagiri.php");
addOption("SonagiriExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/sonagiri/toyota-etios-executive-taxi-service-in-sonagiri.php");
addOption("SonagiriExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/sonagiri/honda-city-and-verna-executive-taxi-service-in-sonagiri.php");
addOption("SonagiriExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/sonagiri/toyota-innova-executive-taxi-service-in-sonagiri.php");

addOption("SonagiriSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("SonagiriSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/sonagiri/chevrolet-tavera-suv-taxi-service-in-sonagiri.php");
addOption("SonagiriSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/sonagiri/mahindra-xylo-suv-taxi-service-in-sonagiri.php");
addOption("SonagiriSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/sonagiri/toyota-innova-executive-taxi-service-in-sonagiri.php");
addOption("SonagiriSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/sonagiri/toyota-innova-crysta-suv-taxi-service-in-sonagiri.php");
addOption("SonagiriSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/sonagiri/tata-safari-suv-taxi-service-in-sonagiri.php");
addOption("SonagiriSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/sonagiri/toyota-fortuner-suv-taxi-service-in-sonagiri.php");

addOption("SonagiriLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("SonagiriLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/sonagiri/pajero-and-endeavour-luxury-taxi-service-in-sonagiri.php");
addOption("SonagiriLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/sonagiri/toyota-fortuner-suv-taxi-service-in-sonagiri.php");
addOption("SonagiriLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/sonagiri/camry-and-altis-luxury-taxi-service-in-sonagiri.php");
addOption("SonagiriLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/sonagiri/skoda-luxury-taxi-service-in-sonagiri.php");
addOption("SonagiriLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/sonagiri/mercedes-c-class-luxury-taxi-service-in-sonagiri.php");
addOption("SonagiriLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/sonagiri/mercedes-e-class-luxury-taxi-service-in-sonagiri.php");
addOption("SonagiriLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/sonagiri/mercedes-s-class-luxury-taxi-service-in-sonagiri.php");
addOption("SonagiriLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/sonagiri/bmw-x5-or-x7-luxury-taxi-service-in-sonagiri.php");
addOption("SonagiriLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/sonagiri/mercedes-benz-gls-luxury-taxi-service-in-sonagiri.php");

addOption("SonagiriTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("SonagiriTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/sonagiri/13-seater-ac-tempo-traveller-rental-service-in-sonagiri.php");
addOption("SonagiriTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/sonagiri/17-seater-ac-tempo-traveller-rental-service-in-sonagiri.php");
addOption("SonagiriTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/sonagiri/17-seater-urbania-luxury-van-rental-service-in-sonagiri.php");
addOption("SonagiriTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/sonagiri/25-seater-ac-tempo-traveller-rental-service-in-sonagiri.php");

addOption("SonagiriCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("SonagiriCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/sonagiri/small-ac-caravan-3-beded-rental-service-in-sonagiri.php");
addOption("SonagiriCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/sonagiri/big-ac-caravan-8-beded-rental-service-in-sonagiri.php");

addOption("SonagiriNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("SonagiriNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/24-seater-non-ac-tourist-coach-rental-service-in-sonagiri.php");
addOption("SonagiriNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/28-seater-non-ac-tourist-coach-rental-service-in-sonagiri.php");
addOption("SonagiriNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/35-seater-non-ac-tourist-coach-rental-service-in-sonagiri.php");
addOption("SonagiriNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/40-seater-non-ac-tourist-coach-rental-service-in-sonagiri.php");
addOption("SonagiriNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/45-seater-non-ac-tourist-coach-rental-service-in-sonagiri.php");
addOption("SonagiriNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/52-seater-non-ac-tourist-coach-rental-service-in-sonagiri.php");

addOption("SonagiriAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("SonagiriAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/30-seater-ac-luxury-coach-rental-service-in-sonagiri.php");
addOption("SonagiriAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/35-seater-ac-luxury-coach-rental-service-in-sonagiri.php");
addOption("SonagiriAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/40-seater-ac-luxury-coach-rental-service-in-sonagiri.php");
addOption("SonagiriAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/sonagiri/45-seater-ac-luxury-coach-rental-service-in-sonagiri.php");
addOption("SonagiriAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/sonagiri/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-sonagiri.php");

addOption("Sanchi", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Sanchi", "Economy Cars", "", "SanchiEconomy");
addList("Sanchi", "Executive Cars", "", "SanchiExecutive");
addList("Sanchi", "SUV'S / Vans", "", "SanchiSUV'S");
addList("Sanchi", "Luxury Cars", "", "SanchiLuxury");
addList("Sanchi", "Tempo Travellers", "", "SanchiTempo");
addList("Sanchi", "AC Caravans", "", "SanchiCaravans");
addList("Sanchi", "NON AC Tourist Coaches", "", "SanchiNON Coaches");
addList("Sanchi", "AC Luxury Coaches", "", "SanchiAC Coaches");

addOption("SanchiEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("SanchiEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/sanchi/alto-800-economy-taxi-service-in-sanchi.php");
addOption("SanchiEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/sanchi/tata-indigo-economy-taxi-service-in-sanchi.php");

addOption("SanchiExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("SanchiExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/sanchi/swift-dezire-executive-taxi-service-in-sanchi.php");
addOption("SanchiExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/sanchi/toyota-etios-executive-taxi-service-in-sanchi.php");
addOption("SanchiExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/sanchi/honda-city-and-verna-executive-taxi-service-in-sanchi.php");
addOption("SanchiExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/sanchi/toyota-innova-executive-taxi-service-in-sanchi.php");

addOption("SanchiSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("SanchiSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/sanchi/chevrolet-tavera-suv-taxi-service-in-sanchi.php");
addOption("SanchiSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/sanchi/mahindra-xylo-suv-taxi-service-in-sanchi.php");
addOption("SanchiSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/sanchi/toyota-innova-executive-taxi-service-in-sanchi.php");
addOption("SanchiSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/sanchi/toyota-innova-crysta-suv-taxi-service-in-sanchi.php");
addOption("SanchiSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/sanchi/tata-safari-suv-taxi-service-in-sanchi.php");
addOption("SanchiSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/sanchi/toyota-fortuner-suv-taxi-service-in-sanchi.php");

addOption("SanchiLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("SanchiLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/sanchi/pajero-and-endeavour-luxury-taxi-service-in-sanchi.php");
addOption("SanchiLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/sanchi/toyota-fortuner-suv-taxi-service-in-sanchi.php");
addOption("SanchiLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/sanchi/camry-and-altis-luxury-taxi-service-in-sanchi.php");
addOption("SanchiLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/sanchi/skoda-luxury-taxi-service-in-sanchi.php");
addOption("SanchiLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/sanchi/mercedes-c-class-luxury-taxi-service-in-sanchi.php");
addOption("SanchiLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/sanchi/mercedes-e-class-luxury-taxi-service-in-sanchi.php");
addOption("SanchiLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/sanchi/mercedes-s-class-luxury-taxi-service-in-sanchi.php");
addOption("SanchiLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/sanchi/bmw-x5-or-x7-luxury-taxi-service-in-sanchi.php");
addOption("SanchiLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/sanchi/mercedes-benz-gls-luxury-taxi-service-in-sanchi.php");

addOption("SanchiTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("SanchiTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/sanchi/13-seater-ac-tempo-traveller-rental-service-in-sanchi.php");
addOption("SanchiTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/sanchi/17-seater-ac-tempo-traveller-rental-service-in-sanchi.php");
addOption("SanchiTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/sanchi/17-seater-urbania-luxury-van-rental-service-in-sanchi.php");
addOption("SanchiTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/sanchi/25-seater-ac-tempo-traveller-rental-service-in-sanchi.php");

addOption("SanchiCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("SanchiCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/sanchi/small-ac-caravan-3-beded-rental-service-in-sanchi.php");
addOption("SanchiCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/sanchi/big-ac-caravan-8-beded-rental-service-in-sanchi.php");

addOption("SanchiNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("SanchiNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/24-seater-non-ac-tourist-coach-rental-service-in-sanchi.php");
addOption("SanchiNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/28-seater-non-ac-tourist-coach-rental-service-in-sanchi.php");
addOption("SanchiNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/35-seater-non-ac-tourist-coach-rental-service-in-sanchi.php");
addOption("SanchiNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/40-seater-non-ac-tourist-coach-rental-service-in-sanchi.php");
addOption("SanchiNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/45-seater-non-ac-tourist-coach-rental-service-in-sanchi.php");
addOption("SanchiNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/52-seater-non-ac-tourist-coach-rental-service-in-sanchi.php");

addOption("SanchiAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("SanchiAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/30-seater-ac-luxury-coach-rental-service-in-sanchi.php");
addOption("SanchiAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/35-seater-ac-luxury-coach-rental-service-in-sanchi.php");
addOption("SanchiAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/40-seater-ac-luxury-coach-rental-service-in-sanchi.php");
addOption("SanchiAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/sanchi/45-seater-ac-luxury-coach-rental-service-in-sanchi.php");
addOption("SanchiAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/sanchi/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-sanchi.php");

addOption("Ujjain", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Ujjain", "Economy Cars", "", "UjjainEconomy");
addList("Ujjain", "Executive Cars", "", "UjjainExecutive");
addList("Ujjain", "SUV'S / Vans", "", "UjjainSUV'S");
addList("Ujjain", "Luxury Cars", "", "UjjainLuxury");
addList("Ujjain", "Tempo Travellers", "", "UjjainTempo");
addList("Ujjain", "AC Caravans", "", "UjjainCaravans");
addList("Ujjain", "NON AC Tourist Coaches", "", "UjjainNON Coaches");
addList("Ujjain", "AC Luxury Coaches", "", "UjjainAC Coaches");

addOption("UjjainEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("UjjainEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/ujjain/alto-800-economy-taxi-service-in-ujjain.php");
addOption("UjjainEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/ujjain/tata-indigo-economy-taxi-service-in-ujjain.php");

addOption("UjjainExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("UjjainExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/ujjain/swift-dezire-executive-taxi-service-in-ujjain.php");
addOption("UjjainExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/ujjain/toyota-etios-executive-taxi-service-in-ujjain.php");
addOption("UjjainExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/ujjain/honda-city-and-verna-executive-taxi-service-in-ujjain.php");
addOption("UjjainExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/ujjain/toyota-innova-executive-taxi-service-in-ujjain.php");

addOption("UjjainSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("UjjainSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/ujjain/chevrolet-tavera-suv-taxi-service-in-ujjain.php");
addOption("UjjainSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/ujjain/mahindra-xylo-suv-taxi-service-in-ujjain.php");
addOption("UjjainSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/ujjain/toyota-innova-executive-taxi-service-in-ujjain.php");
addOption("UjjainSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/ujjain/toyota-innova-crysta-suv-taxi-service-in-ujjain.php");
addOption("UjjainSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/ujjain/tata-safari-suv-taxi-service-in-ujjain.php");
addOption("UjjainSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/ujjain/toyota-fortuner-suv-taxi-service-in-ujjain.php");

addOption("UjjainLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("UjjainLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/ujjain/pajero-and-endeavour-luxury-taxi-service-in-ujjain.php");
addOption("UjjainLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/ujjain/toyota-fortuner-suv-taxi-service-in-ujjain.php");
addOption("UjjainLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/ujjain/camry-and-altis-luxury-taxi-service-in-ujjain.php");
addOption("UjjainLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/ujjain/skoda-luxury-taxi-service-in-ujjain.php");
addOption("UjjainLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/ujjain/mercedes-c-class-luxury-taxi-service-in-ujjain.php");
addOption("UjjainLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/ujjain/mercedes-e-class-luxury-taxi-service-in-ujjain.php");
addOption("UjjainLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/ujjain/mercedes-s-class-luxury-taxi-service-in-ujjain.php");
addOption("UjjainLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/ujjain/bmw-x5-or-x7-luxury-taxi-service-in-ujjain.php");
addOption("UjjainLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/ujjain/mercedes-benz-gls-luxury-taxi-service-in-ujjain.php");

addOption("UjjainTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("UjjainTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/ujjain/13-seater-ac-tempo-traveller-rental-service-in-ujjain.php");
addOption("UjjainTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/ujjain/17-seater-ac-tempo-traveller-rental-service-in-ujjain.php");
addOption("UjjainTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/ujjain/17-seater-urbania-luxury-van-rental-service-in-ujjain.php");
addOption("UjjainTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/ujjain/25-seater-ac-tempo-traveller-rental-service-in-ujjain.php");

addOption("UjjainCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("UjjainCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/ujjain/small-ac-caravan-3-beded-rental-service-in-ujjain.php");
addOption("UjjainCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/ujjain/big-ac-caravan-8-beded-rental-service-in-ujjain.php");

addOption("UjjainNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("UjjainNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/24-seater-non-ac-tourist-coach-rental-service-in-ujjain.php");
addOption("UjjainNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/28-seater-non-ac-tourist-coach-rental-service-in-ujjain.php");
addOption("UjjainNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/35-seater-non-ac-tourist-coach-rental-service-in-ujjain.php");
addOption("UjjainNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/40-seater-non-ac-tourist-coach-rental-service-in-ujjain.php");
addOption("UjjainNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/45-seater-non-ac-tourist-coach-rental-service-in-ujjain.php");
addOption("UjjainNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/52-seater-non-ac-tourist-coach-rental-service-in-ujjain.php");

addOption("UjjainAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("UjjainAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/30-seater-ac-luxury-coach-rental-service-in-ujjain.php");
addOption("UjjainAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/35-seater-ac-luxury-coach-rental-service-in-ujjain.php");
addOption("UjjainAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/40-seater-ac-luxury-coach-rental-service-in-ujjain.php");
addOption("UjjainAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/ujjain/45-seater-ac-luxury-coach-rental-service-in-ujjain.php");
addOption("UjjainAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/ujjain/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-ujjain.php");

addOption("Agra", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Agra", "Economy Cars", "", "AgraEconomy");
addList("Agra", "Executive Cars", "", "AgraExecutive");
addList("Agra", "SUV'S / Vans", "", "AgraSUV'S");
addList("Agra", "Luxury Cars", "", "AgraLuxury");
addList("Agra", "Tempo Travellers", "", "AgraTempo");
addList("Agra", "AC Caravans", "", "AgraCaravans");
addList("Agra", "NON AC Tourist Coaches", "", "AgraNON Coaches");
addList("Agra", "AC Luxury Coaches", "", "AgraAC Coaches");

addOption("AgraEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("AgraEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/agra/alto-800-economy-taxi-service-in-agra.php");
addOption("AgraEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/agra/tata-indigo-economy-taxi-service-in-agra.php");

addOption("AgraExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("AgraExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/agra/swift-dezire-executive-taxi-service-in-agra.php");
addOption("AgraExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/agra/toyota-etios-executive-taxi-service-in-agra.php");
addOption("AgraExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/agra/honda-city-and-verna-executive-taxi-service-in-agra.php");
addOption("AgraExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/agra/toyota-innova-executive-taxi-service-in-agra.php");

addOption("AgraSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("AgraSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/agra/chevrolet-tavera-suv-taxi-service-in-agra.php");
addOption("AgraSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/agra/mahindra-xylo-suv-taxi-service-in-agra.php");
addOption("AgraSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/agra/toyota-innova-executive-taxi-service-in-agra.php");
addOption("AgraSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/agra/toyota-innova-crysta-suv-taxi-service-in-agra.php");
addOption("AgraSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/agra/tata-safari-suv-taxi-service-in-agra.php");
addOption("AgraSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/agra/toyota-fortuner-suv-taxi-service-in-agra.php");

addOption("AgraLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("AgraLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/agra/pajero-and-endeavour-luxury-taxi-service-in-agra.php");
addOption("AgraLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/agra/toyota-fortuner-suv-taxi-service-in-agra.php");
addOption("AgraLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/agra/camry-and-altis-luxury-taxi-service-in-agra.php");
addOption("AgraLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/agra/skoda-luxury-taxi-service-in-agra.php");
addOption("AgraLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/agra/mercedes-c-class-luxury-taxi-service-in-agra.php");
addOption("AgraLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/agra/mercedes-e-class-luxury-taxi-service-in-agra.php");
addOption("AgraLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/agra/mercedes-s-class-luxury-taxi-service-in-agra.php");
addOption("AgraLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/agra/bmw-x5-or-x7-luxury-taxi-service-in-agra.php");
addOption("AgraLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/agra/mercedes-benz-gls-luxury-taxi-service-in-agra.php");

addOption("AgraTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("AgraTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/agra/13-seater-ac-tempo-traveller-rental-service-in-agra.php");
addOption("AgraTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/agra/17-seater-ac-tempo-traveller-rental-service-in-agra.php");
addOption("AgraTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/agra/17-seater-urbania-luxury-van-rental-service-in-agra.php");
addOption("AgraTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/agra/25-seater-ac-tempo-traveller-rental-service-in-agra.php");

addOption("AgraCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("AgraCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/agra/small-ac-caravan-3-beded-rental-service-in-agra.php");
addOption("AgraCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/agra/big-ac-caravan-8-beded-rental-service-in-agra.php");

addOption("AgraNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("AgraNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/agra/24-seater-non-ac-tourist-coach-rental-service-in-agra.php");
addOption("AgraNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/agra/28-seater-non-ac-tourist-coach-rental-service-in-agra.php");
addOption("AgraNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/agra/35-seater-non-ac-tourist-coach-rental-service-in-agra.php");
addOption("AgraNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/agra/40-seater-non-ac-tourist-coach-rental-service-in-agra.php");
addOption("AgraNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/agra/45-seater-non-ac-tourist-coach-rental-service-in-agra.php");
addOption("AgraNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/agra/52-seater-non-ac-tourist-coach-rental-service-in-agra.php");

addOption("AgraAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("AgraAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/agra/30-seater-ac-luxury-coach-rental-service-in-agra.php");
addOption("AgraAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/agra/35-seater-ac-luxury-coach-rental-service-in-agra.php");
addOption("AgraAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/agra/40-seater-ac-luxury-coach-rental-service-in-agra.php");
addOption("AgraAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/agra/45-seater-ac-luxury-coach-rental-service-in-agra.php");
addOption("AgraAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/agra/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-agra.php");

addOption("Varanasi", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Varanasi", "Economy Cars", "", "VaranasiEconomy");
addList("Varanasi", "Executive Cars", "", "VaranasiExecutive");
addList("Varanasi", "SUV'S / Vans", "", "VaranasiSUV'S");
addList("Varanasi", "Luxury Cars", "", "VaranasiLuxury");
addList("Varanasi", "Tempo Travellers", "", "VaranasiTempo");
addList("Varanasi", "AC Caravans", "", "VaranasiCaravans");
addList("Varanasi", "NON AC Tourist Coaches", "", "VaranasiNON Coaches");
addList("Varanasi", "AC Luxury Coaches", "", "VaranasiAC Coaches");

addOption("VaranasiEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("VaranasiEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/varanasi/alto-800-economy-taxi-service-in-varanasi.php");
addOption("VaranasiEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/varanasi/tata-indigo-economy-taxi-service-in-varanasi.php");

addOption("VaranasiExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("VaranasiExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/varanasi/swift-dezire-executive-taxi-service-in-varanasi.php");
addOption("VaranasiExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/varanasi/toyota-etios-executive-taxi-service-in-varanasi.php");
addOption("VaranasiExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/varanasi/honda-city-and-verna-executive-taxi-service-in-varanasi.php");
addOption("VaranasiExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/varanasi/toyota-innova-executive-taxi-service-in-varanasi.php");

addOption("VaranasiSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("VaranasiSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/varanasi/chevrolet-tavera-suv-taxi-service-in-varanasi.php");
addOption("VaranasiSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/varanasi/mahindra-xylo-suv-taxi-service-in-varanasi.php");
addOption("VaranasiSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/varanasi/toyota-innova-executive-taxi-service-in-varanasi.php");
addOption("VaranasiSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/varanasi/toyota-innova-crysta-suv-taxi-service-in-varanasi.php");
addOption("VaranasiSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/varanasi/tata-safari-suv-taxi-service-in-varanasi.php");
addOption("VaranasiSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/varanasi/toyota-fortuner-suv-taxi-service-in-varanasi.php");

addOption("VaranasiLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("VaranasiLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/varanasi/pajero-and-endeavour-luxury-taxi-service-in-varanasi.php");
addOption("VaranasiLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/varanasi/toyota-fortuner-suv-taxi-service-in-varanasi.php");
addOption("VaranasiLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/varanasi/camry-and-altis-luxury-taxi-service-in-varanasi.php");
addOption("VaranasiLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/varanasi/skoda-luxury-taxi-service-in-varanasi.php");
addOption("VaranasiLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/varanasi/mercedes-c-class-luxury-taxi-service-in-varanasi.php");
addOption("VaranasiLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/varanasi/mercedes-e-class-luxury-taxi-service-in-varanasi.php");
addOption("VaranasiLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/varanasi/mercedes-s-class-luxury-taxi-service-in-varanasi.php");
addOption("VaranasiLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/varanasi/bmw-x5-or-x7-luxury-taxi-service-in-varanasi.php");
addOption("VaranasiLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/varanasi/mercedes-benz-gls-luxury-taxi-service-in-varanasi.php");

addOption("VaranasiTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("VaranasiTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/varanasi/13-seater-ac-tempo-traveller-rental-service-in-varanasi.php");
addOption("VaranasiTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/varanasi/17-seater-ac-tempo-traveller-rental-service-in-varanasi.php");
addOption("VaranasiTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/varanasi/17-seater-urbania-luxury-van-rental-service-in-varanasi.php");
addOption("VaranasiTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/varanasi/25-seater-ac-tempo-traveller-rental-service-in-varanasi.php");

addOption("VaranasiCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("VaranasiCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/varanasi/small-ac-caravan-3-beded-rental-service-in-varanasi.php");
addOption("VaranasiCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/varanasi/big-ac-caravan-8-beded-rental-service-in-varanasi.php");

addOption("VaranasiNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("VaranasiNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/24-seater-non-ac-tourist-coach-rental-service-in-varanasi.php");
addOption("VaranasiNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/28-seater-non-ac-tourist-coach-rental-service-in-varanasi.php");
addOption("VaranasiNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/35-seater-non-ac-tourist-coach-rental-service-in-varanasi.php");
addOption("VaranasiNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/40-seater-non-ac-tourist-coach-rental-service-in-varanasi.php");
addOption("VaranasiNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/45-seater-non-ac-tourist-coach-rental-service-in-varanasi.php");
addOption("VaranasiNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/52-seater-non-ac-tourist-coach-rental-service-in-varanasi.php");

addOption("VaranasiAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("VaranasiAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/30-seater-ac-luxury-coach-rental-service-in-varanasi.php");
addOption("VaranasiAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/35-seater-ac-luxury-coach-rental-service-in-varanasi.php");
addOption("VaranasiAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/40-seater-ac-luxury-coach-rental-service-in-varanasi.php");
addOption("VaranasiAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/varanasi/45-seater-ac-luxury-coach-rental-service-in-varanasi.php");
addOption("VaranasiAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/varanasi/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-varanasi.php");

addOption("Kota", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Kota", "Economy Cars", "", "KotaEconomy");
addList("Kota", "Executive Cars", "", "KotaExecutive");
addList("Kota", "SUV'S / Vans", "", "KotaSUV'S");
addList("Kota", "Luxury Cars", "", "KotaLuxury");
addList("Kota", "Tempo Travellers", "", "KotaTempo");
addList("Kota", "AC Caravans", "", "KotaCaravans");
addList("Kota", "NON AC Tourist Coaches", "", "KotaNON Coaches");
addList("Kota", "AC Luxury Coaches", "", "KotaAC Coaches");

addOption("KotaEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("KotaEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/kota/alto-800-economy-taxi-service-in-kota.php");
addOption("KotaEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/kota/tata-indigo-economy-taxi-service-in-kota.php");

addOption("KotaExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("KotaExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/kota/swift-dezire-executive-taxi-service-in-kota.php");
addOption("KotaExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/kota/toyota-etios-executive-taxi-service-in-kota.php");
addOption("KotaExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/kota/honda-city-and-verna-executive-taxi-service-in-kota.php");
addOption("KotaExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/kota/toyota-innova-executive-taxi-service-in-kota.php");

addOption("KotaSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("KotaSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/kota/chevrolet-tavera-suv-taxi-service-in-kota.php");
addOption("KotaSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/kota/mahindra-xylo-suv-taxi-service-in-kota.php");
addOption("KotaSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/kota/toyota-innova-executive-taxi-service-in-kota.php");
addOption("KotaSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/kota/toyota-innova-crysta-suv-taxi-service-in-kota.php");
addOption("KotaSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/kota/tata-safari-suv-taxi-service-in-kota.php");
addOption("KotaSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/kota/toyota-fortuner-suv-taxi-service-in-kota.php");

addOption("KotaLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("KotaLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/kota/pajero-and-endeavour-luxury-taxi-service-in-kota.php");
addOption("KotaLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/kota/toyota-fortuner-suv-taxi-service-in-kota.php");
addOption("KotaLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/kota/camry-and-altis-luxury-taxi-service-in-kota.php");
addOption("KotaLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/kota/skoda-luxury-taxi-service-in-kota.php");
addOption("KotaLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/kota/mercedes-c-class-luxury-taxi-service-in-kota.php");
addOption("KotaLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/kota/mercedes-e-class-luxury-taxi-service-in-kota.php");
addOption("KotaLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/kota/mercedes-s-class-luxury-taxi-service-in-kota.php");
addOption("KotaLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/kota/bmw-x5-or-x7-luxury-taxi-service-in-kota.php");
addOption("KotaLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/kota/mercedes-benz-gls-luxury-taxi-service-in-kota.php");

addOption("KotaTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("KotaTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/kota/13-seater-ac-tempo-traveller-rental-service-in-kota.php");
addOption("KotaTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/kota/17-seater-ac-tempo-traveller-rental-service-in-kota.php");
addOption("KotaTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/kota/17-seater-urbania-luxury-van-rental-service-in-kota.php");
addOption("KotaTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/kota/25-seater-ac-tempo-traveller-rental-service-in-kota.php");

addOption("KotaCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("KotaCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/kota/small-ac-caravan-3-beded-rental-service-in-kota.php");
addOption("KotaCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/kota/big-ac-caravan-8-beded-rental-service-in-kota.php");

addOption("KotaNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("KotaNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/kota/24-seater-non-ac-tourist-coach-rental-service-in-kota.php");
addOption("KotaNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/kota/28-seater-non-ac-tourist-coach-rental-service-in-kota.php");
addOption("KotaNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/kota/35-seater-non-ac-tourist-coach-rental-service-in-kota.php");
addOption("KotaNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/kota/40-seater-non-ac-tourist-coach-rental-service-in-kota.php");
addOption("KotaNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/kota/45-seater-non-ac-tourist-coach-rental-service-in-kota.php");
addOption("KotaNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/kota/52-seater-non-ac-tourist-coach-rental-service-in-kota.php");

addOption("KotaAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("KotaAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/kota/30-seater-ac-luxury-coach-rental-service-in-kota.php");
addOption("KotaAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/kota/35-seater-ac-luxury-coach-rental-service-in-kota.php");
addOption("KotaAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/kota/40-seater-ac-luxury-coach-rental-service-in-kota.php");
addOption("KotaAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/kota/45-seater-ac-luxury-coach-rental-service-in-kota.php");
addOption("KotaAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/kota/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-kota.php");

addOption("Raipur", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Raipur", "Economy Cars", "", "RaipurEconomy");
addList("Raipur", "Executive Cars", "", "RaipurExecutive");
addList("Raipur", "SUV'S / Vans", "", "RaipurSUV'S");
addList("Raipur", "Luxury Cars", "", "RaipurLuxury");
addList("Raipur", "Tempo Travellers", "", "RaipurTempo");
addList("Raipur", "AC Caravans", "", "RaipurCaravans");
addList("Raipur", "NON AC Tourist Coaches", "", "RaipurNON Coaches");
addList("Raipur", "AC Luxury Coaches", "", "RaipurAC Coaches");

addOption("RaipurEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("RaipurEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/raipur/alto-800-economy-taxi-service-in-raipur.php");
addOption("RaipurEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/raipur/tata-indigo-economy-taxi-service-in-raipur.php");

addOption("RaipurExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("RaipurExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/raipur/swift-dezire-executive-taxi-service-in-raipur.php");
addOption("RaipurExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/raipur/toyota-etios-executive-taxi-service-in-raipur.php");
addOption("RaipurExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/raipur/honda-city-and-verna-executive-taxi-service-in-raipur.php");
addOption("RaipurExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/raipur/toyota-innova-executive-taxi-service-in-raipur.php");

addOption("RaipurSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("RaipurSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/raipur/chevrolet-tavera-suv-taxi-service-in-raipur.php");
addOption("RaipurSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/raipur/mahindra-xylo-suv-taxi-service-in-raipur.php");
addOption("RaipurSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/raipur/toyota-innova-executive-taxi-service-in-raipur.php");
addOption("RaipurSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/raipur/toyota-innova-crysta-suv-taxi-service-in-raipur.php");
addOption("RaipurSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/raipur/tata-safari-suv-taxi-service-in-raipur.php");
addOption("RaipurSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/raipur/toyota-fortuner-suv-taxi-service-in-raipur.php");

addOption("RaipurLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("RaipurLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/raipur/pajero-and-endeavour-luxury-taxi-service-in-raipur.php");
addOption("RaipurLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/raipur/toyota-fortuner-suv-taxi-service-in-raipur.php");
addOption("RaipurLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/raipur/camry-and-altis-luxury-taxi-service-in-raipur.php");
addOption("RaipurLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/raipur/skoda-luxury-taxi-service-in-raipur.php");
addOption("RaipurLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/raipur/mercedes-c-class-luxury-taxi-service-in-raipur.php");
addOption("RaipurLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/raipur/mercedes-e-class-luxury-taxi-service-in-raipur.php");
addOption("RaipurLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/raipur/mercedes-s-class-luxury-taxi-service-in-raipur.php");
addOption("RaipurLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/raipur/bmw-x5-or-x7-luxury-taxi-service-in-raipur.php");
addOption("RaipurLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/raipur/mercedes-benz-gls-luxury-taxi-service-in-raipur.php");

addOption("RaipurTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("RaipurTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/raipur/13-seater-ac-tempo-traveller-rental-service-in-raipur.php");
addOption("RaipurTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/raipur/17-seater-ac-tempo-traveller-rental-service-in-raipur.php");
addOption("RaipurTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/raipur/17-seater-urbania-luxury-van-rental-service-in-raipur.php");
addOption("RaipurTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/raipur/25-seater-ac-tempo-traveller-rental-service-in-raipur.php");

addOption("RaipurCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("RaipurCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/raipur/small-ac-caravan-3-beded-rental-service-in-raipur.php");
addOption("RaipurCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/raipur/big-ac-caravan-8-beded-rental-service-in-raipur.php");

addOption("RaipurNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("RaipurNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/24-seater-non-ac-tourist-coach-rental-service-in-raipur.php");
addOption("RaipurNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/28-seater-non-ac-tourist-coach-rental-service-in-raipur.php");
addOption("RaipurNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/35-seater-non-ac-tourist-coach-rental-service-in-raipur.php");
addOption("RaipurNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/40-seater-non-ac-tourist-coach-rental-service-in-raipur.php");
addOption("RaipurNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/45-seater-non-ac-tourist-coach-rental-service-in-raipur.php");
addOption("RaipurNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/52-seater-non-ac-tourist-coach-rental-service-in-raipur.php");

addOption("RaipurAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("RaipurAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/30-seater-ac-luxury-coach-rental-service-in-raipur.php");
addOption("RaipurAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/35-seater-ac-luxury-coach-rental-service-in-raipur.php");
addOption("RaipurAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/40-seater-ac-luxury-coach-rental-service-in-raipur.php");
addOption("RaipurAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/raipur/45-seater-ac-luxury-coach-rental-service-in-raipur.php");
addOption("RaipurAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/raipur/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-raipur.php");

addOption("Bilaspur", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Bilaspur", "Economy Cars", "", "BilaspurEconomy");
addList("Bilaspur", "Executive Cars", "", "BilaspurExecutive");
addList("Bilaspur", "SUV'S / Vans", "", "BilaspurSUV'S");
addList("Bilaspur", "Luxury Cars", "", "BilaspurLuxury");
addList("Bilaspur", "Tempo Travellers", "", "BilaspurTempo");
addList("Bilaspur", "AC Caravans", "", "BilaspurCaravans");
addList("Bilaspur", "NON AC Tourist Coaches", "", "BilaspurNON Coaches");
addList("Bilaspur", "AC Luxury Coaches", "", "BilaspurAC Coaches");

addOption("BilaspurEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("BilaspurEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/bilaspur/alto-800-economy-taxi-service-in-bilaspur.php");
addOption("BilaspurEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/bilaspur/tata-indigo-economy-taxi-service-in-bilaspur.php");

addOption("BilaspurExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("BilaspurExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/bilaspur/swift-dezire-executive-taxi-service-in-bilaspur.php");
addOption("BilaspurExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/bilaspur/toyota-etios-executive-taxi-service-in-bilaspur.php");
addOption("BilaspurExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/bilaspur/honda-city-and-verna-executive-taxi-service-in-bilaspur.php");
addOption("BilaspurExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bilaspur/toyota-innova-executive-taxi-service-in-bilaspur.php");

addOption("BilaspurSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("BilaspurSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/bilaspur/chevrolet-tavera-suv-taxi-service-in-bilaspur.php");
addOption("BilaspurSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/bilaspur/mahindra-xylo-suv-taxi-service-in-bilaspur.php");
addOption("BilaspurSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/bilaspur/toyota-innova-executive-taxi-service-in-bilaspur.php");
addOption("BilaspurSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/bilaspur/toyota-innova-crysta-suv-taxi-service-in-bilaspur.php");
addOption("BilaspurSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/bilaspur/tata-safari-suv-taxi-service-in-bilaspur.php");
addOption("BilaspurSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bilaspur/toyota-fortuner-suv-taxi-service-in-bilaspur.php");

addOption("BilaspurLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("BilaspurLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/bilaspur/pajero-and-endeavour-luxury-taxi-service-in-bilaspur.php");
addOption("BilaspurLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/bilaspur/toyota-fortuner-suv-taxi-service-in-bilaspur.php");
addOption("BilaspurLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/bilaspur/camry-and-altis-luxury-taxi-service-in-bilaspur.php");
addOption("BilaspurLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/bilaspur/skoda-luxury-taxi-service-in-bilaspur.php");
addOption("BilaspurLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/bilaspur/mercedes-c-class-luxury-taxi-service-in-bilaspur.php");
addOption("BilaspurLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/bilaspur/mercedes-e-class-luxury-taxi-service-in-bilaspur.php");
addOption("BilaspurLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/bilaspur/mercedes-s-class-luxury-taxi-service-in-bilaspur.php");
addOption("BilaspurLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/bilaspur/bmw-x5-or-x7-luxury-taxi-service-in-bilaspur.php");
addOption("BilaspurLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/bilaspur/mercedes-benz-gls-luxury-taxi-service-in-bilaspur.php");

addOption("BilaspurTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("BilaspurTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/bilaspur/13-seater-ac-tempo-traveller-rental-service-in-bilaspur.php");
addOption("BilaspurTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/bilaspur/17-seater-ac-tempo-traveller-rental-service-in-bilaspur.php");
addOption("BilaspurTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/bilaspur/17-seater-urbania-luxury-van-rental-service-in-bilaspur.php");
addOption("BilaspurTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/bilaspur/25-seater-ac-tempo-traveller-rental-service-in-bilaspur.php");

addOption("BilaspurCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("BilaspurCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/bilaspur/small-ac-caravan-3-beded-rental-service-in-bilaspur.php");
addOption("BilaspurCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/bilaspur/big-ac-caravan-8-beded-rental-service-in-bilaspur.php");

addOption("BilaspurNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("BilaspurNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/24-seater-non-ac-tourist-coach-rental-service-in-bilaspur.php");
addOption("BilaspurNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/28-seater-non-ac-tourist-coach-rental-service-in-bilaspur.php");
addOption("BilaspurNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/35-seater-non-ac-tourist-coach-rental-service-in-bilaspur.php");
addOption("BilaspurNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/40-seater-non-ac-tourist-coach-rental-service-in-bilaspur.php");
addOption("BilaspurNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/45-seater-non-ac-tourist-coach-rental-service-in-bilaspur.php");
addOption("BilaspurNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/52-seater-non-ac-tourist-coach-rental-service-in-bilaspur.php");

addOption("BilaspurAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("BilaspurAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/30-seater-ac-luxury-coach-rental-service-in-bilaspur.php");
addOption("BilaspurAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/35-seater-ac-luxury-coach-rental-service-in-bilaspur.php");
addOption("BilaspurAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/40-seater-ac-luxury-coach-rental-service-in-bilaspur.php");
addOption("BilaspurAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/bilaspur/45-seater-ac-luxury-coach-rental-service-in-bilaspur.php");
addOption("BilaspurAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/bilaspur/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-bilaspur.php");

addOption("Allahabad", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Allahabad", "Economy Cars", "", "AllahabadEconomy");
addList("Allahabad", "Executive Cars", "", "AllahabadExecutive");
addList("Allahabad", "SUV'S / Vans", "", "AllahabadSUV'S");
addList("Allahabad", "Luxury Cars", "", "AllahabadLuxury");
addList("Allahabad", "Tempo Travellers", "", "AllahabadTempo");
addList("Allahabad", "AC Caravans", "", "AllahabadCaravans");
addList("Allahabad", "NON AC Tourist Coaches", "", "AllahabadNON Coaches");
addList("Allahabad", "AC Luxury Coaches", "", "AllahabadAC Coaches");

addOption("AllahabadEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("AllahabadEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/allahabad/alto-800-economy-taxi-service-in-allahabad.php");
addOption("AllahabadEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/allahabad/tata-indigo-economy-taxi-service-in-allahabad.php");

addOption("AllahabadExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("AllahabadExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/allahabad/swift-dezire-executive-taxi-service-in-allahabad.php");
addOption("AllahabadExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/allahabad/toyota-etios-executive-taxi-service-in-allahabad.php");
addOption("AllahabadExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/allahabad/honda-city-and-verna-executive-taxi-service-in-allahabad.php");
addOption("AllahabadExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/allahabad/toyota-innova-executive-taxi-service-in-allahabad.php");

addOption("AllahabadSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("AllahabadSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/allahabad/chevrolet-tavera-suv-taxi-service-in-allahabad.php");
addOption("AllahabadSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/allahabad/mahindra-xylo-suv-taxi-service-in-allahabad.php");
addOption("AllahabadSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/allahabad/toyota-innova-executive-taxi-service-in-allahabad.php");
addOption("AllahabadSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/allahabad/toyota-innova-crysta-suv-taxi-service-in-allahabad.php");
addOption("AllahabadSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/allahabad/tata-safari-suv-taxi-service-in-allahabad.php");
addOption("AllahabadSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/allahabad/toyota-fortuner-suv-taxi-service-in-allahabad.php");

addOption("AllahabadLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("AllahabadLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/allahabad/pajero-and-endeavour-luxury-taxi-service-in-allahabad.php");
addOption("AllahabadLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/allahabad/toyota-fortuner-suv-taxi-service-in-allahabad.php");
addOption("AllahabadLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/allahabad/camry-and-altis-luxury-taxi-service-in-allahabad.php");
addOption("AllahabadLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/allahabad/skoda-luxury-taxi-service-in-allahabad.php");
addOption("AllahabadLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/allahabad/mercedes-c-class-luxury-taxi-service-in-allahabad.php");
addOption("AllahabadLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/allahabad/mercedes-e-class-luxury-taxi-service-in-allahabad.php");
addOption("AllahabadLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/allahabad/mercedes-s-class-luxury-taxi-service-in-allahabad.php");
addOption("AllahabadLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/allahabad/bmw-x5-or-x7-luxury-taxi-service-in-allahabad.php");
addOption("AllahabadLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/allahabad/mercedes-benz-gls-luxury-taxi-service-in-allahabad.php");

addOption("AllahabadTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("AllahabadTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/allahabad/13-seater-ac-tempo-traveller-rental-service-in-allahabad.php");
addOption("AllahabadTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/allahabad/17-seater-ac-tempo-traveller-rental-service-in-allahabad.php");
addOption("AllahabadTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/allahabad/17-seater-urbania-luxury-van-rental-service-in-allahabad.php");
addOption("AllahabadTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/allahabad/25-seater-ac-tempo-traveller-rental-service-in-allahabad.php");

addOption("AllahabadCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("AllahabadCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/allahabad/small-ac-caravan-3-beded-rental-service-in-allahabad.php");
addOption("AllahabadCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/allahabad/big-ac-caravan-8-beded-rental-service-in-allahabad.php");

addOption("AllahabadNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("AllahabadNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/24-seater-non-ac-tourist-coach-rental-service-in-allahabad.php");
addOption("AllahabadNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/28-seater-non-ac-tourist-coach-rental-service-in-allahabad.php");
addOption("AllahabadNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/35-seater-non-ac-tourist-coach-rental-service-in-allahabad.php");
addOption("AllahabadNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/40-seater-non-ac-tourist-coach-rental-service-in-allahabad.php");
addOption("AllahabadNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/45-seater-non-ac-tourist-coach-rental-service-in-allahabad.php");
addOption("AllahabadNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/52-seater-non-ac-tourist-coach-rental-service-in-allahabad.php");

addOption("AllahabadAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("AllahabadAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/30-seater-ac-luxury-coach-rental-service-in-allahabad.php");
addOption("AllahabadAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/35-seater-ac-luxury-coach-rental-service-in-allahabad.php");
addOption("AllahabadAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/40-seater-ac-luxury-coach-rental-service-in-allahabad.php");
addOption("AllahabadAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/allahabad/45-seater-ac-luxury-coach-rental-service-in-allahabad.php");
addOption("AllahabadAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/allahabad/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-allahabad.php");

addOption("Vadodara", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Vadodara", "Economy Cars", "", "VadodaraEconomy");
addList("Vadodara", "Executive Cars", "", "VadodaraExecutive");
addList("Vadodara", "SUV'S / Vans", "", "VadodaraSUV'S");
addList("Vadodara", "Luxury Cars", "", "VadodaraLuxury");
addList("Vadodara", "Tempo Travellers", "", "VadodaraTempo");
addList("Vadodara", "AC Caravans", "", "VadodaraCaravans");
addList("Vadodara", "NON AC Tourist Coaches", "", "VadodaraNON Coaches");
addList("Vadodara", "AC Luxury Coaches", "", "VadodaraAC Coaches");

addOption("VadodaraEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("VadodaraEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/vadodara/alto-800-economy-taxi-service-in-vadodara.php");
addOption("VadodaraEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/vadodara/tata-indigo-economy-taxi-service-in-vadodara.php");

addOption("VadodaraExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("VadodaraExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/vadodara/swift-dezire-executive-taxi-service-in-vadodara.php");
addOption("VadodaraExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/vadodara/toyota-etios-executive-taxi-service-in-vadodara.php");
addOption("VadodaraExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/vadodara/honda-city-and-verna-executive-taxi-service-in-vadodara.php");
addOption("VadodaraExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/vadodara/toyota-innova-executive-taxi-service-in-vadodara.php");

addOption("VadodaraSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("VadodaraSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/vadodara/chevrolet-tavera-suv-taxi-service-in-vadodara.php");
addOption("VadodaraSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/vadodara/mahindra-xylo-suv-taxi-service-in-vadodara.php");
addOption("VadodaraSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/vadodara/toyota-innova-executive-taxi-service-in-vadodara.php");
addOption("VadodaraSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/vadodara/toyota-innova-crysta-suv-taxi-service-in-vadodara.php");
addOption("VadodaraSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/vadodara/tata-safari-suv-taxi-service-in-vadodara.php");
addOption("VadodaraSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/vadodara/toyota-fortuner-suv-taxi-service-in-vadodara.php");

addOption("VadodaraLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("VadodaraLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/vadodara/pajero-and-endeavour-luxury-taxi-service-in-vadodara.php");
addOption("VadodaraLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/vadodara/toyota-fortuner-suv-taxi-service-in-vadodara.php");
addOption("VadodaraLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/vadodara/camry-and-altis-luxury-taxi-service-in-vadodara.php");
addOption("VadodaraLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/vadodara/skoda-luxury-taxi-service-in-vadodara.php");
addOption("VadodaraLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/vadodara/mercedes-c-class-luxury-taxi-service-in-vadodara.php");
addOption("VadodaraLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/vadodara/mercedes-e-class-luxury-taxi-service-in-vadodara.php");
addOption("VadodaraLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/vadodara/mercedes-s-class-luxury-taxi-service-in-vadodara.php");
addOption("VadodaraLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/vadodara/bmw-x5-or-x7-luxury-taxi-service-in-vadodara.php");
addOption("VadodaraLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/vadodara/mercedes-benz-gls-luxury-taxi-service-in-vadodara.php");

addOption("VadodaraTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("VadodaraTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/vadodara/13-seater-ac-tempo-traveller-rental-service-in-vadodara.php");
addOption("VadodaraTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/vadodara/17-seater-ac-tempo-traveller-rental-service-in-vadodara.php");
addOption("VadodaraTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/vadodara/17-seater-urbania-luxury-van-rental-service-in-vadodara.php");
addOption("VadodaraTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/vadodara/25-seater-ac-tempo-traveller-rental-service-in-vadodara.php");

addOption("VadodaraCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("VadodaraCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/vadodara/small-ac-caravan-3-beded-rental-service-in-vadodara.php");
addOption("VadodaraCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/vadodara/big-ac-caravan-8-beded-rental-service-in-vadodara.php");

addOption("VadodaraNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("VadodaraNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/24-seater-non-ac-tourist-coach-rental-service-in-vadodara.php");
addOption("VadodaraNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/28-seater-non-ac-tourist-coach-rental-service-in-vadodara.php");
addOption("VadodaraNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/35-seater-non-ac-tourist-coach-rental-service-in-vadodara.php");
addOption("VadodaraNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/40-seater-non-ac-tourist-coach-rental-service-in-vadodara.php");
addOption("VadodaraNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/45-seater-non-ac-tourist-coach-rental-service-in-vadodara.php");
addOption("VadodaraNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/52-seater-non-ac-tourist-coach-rental-service-in-vadodara.php");

addOption("VadodaraAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("VadodaraAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/30-seater-ac-luxury-coach-rental-service-in-vadodara.php");
addOption("VadodaraAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/35-seater-ac-luxury-coach-rental-service-in-vadodara.php");
addOption("VadodaraAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/40-seater-ac-luxury-coach-rental-service-in-vadodara.php");
addOption("VadodaraAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/vadodara/45-seater-ac-luxury-coach-rental-service-in-vadodara.php");
addOption("VadodaraAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/vadodara/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-vadodara.php");

addOption("Jhansi", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Jhansi", "Economy Cars", "", "JhansiEconomy");
addList("Jhansi", "Executive Cars", "", "JhansiExecutive");
addList("Jhansi", "SUV'S / Vans", "", "JhansiSUV'S");
addList("Jhansi", "Luxury Cars", "", "JhansiLuxury");
addList("Jhansi", "Tempo Travellers", "", "JhansiTempo");
addList("Jhansi", "AC Caravans", "", "JhansiCaravans");
addList("Jhansi", "NON AC Tourist Coaches", "", "JhansiNON Coaches");
addList("Jhansi", "AC Luxury Coaches", "", "JhansiAC Coaches");

addOption("JhansiEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("JhansiEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/jhansi/alto-800-economy-taxi-service-in-jhansi.php");
addOption("JhansiEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/jhansi/tata-indigo-economy-taxi-service-in-jhansi.php");

addOption("JhansiExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("JhansiExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/jhansi/swift-dezire-executive-taxi-service-in-jhansi.php");
addOption("JhansiExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/jhansi/toyota-etios-executive-taxi-service-in-jhansi.php");
addOption("JhansiExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/jhansi/honda-city-and-verna-executive-taxi-service-in-jhansi.php");
addOption("JhansiExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/jhansi/toyota-innova-executive-taxi-service-in-jhansi.php");

addOption("JhansiSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("JhansiSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/jhansi/chevrolet-tavera-suv-taxi-service-in-jhansi.php");
addOption("JhansiSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/jhansi/mahindra-xylo-suv-taxi-service-in-jhansi.php");
addOption("JhansiSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/jhansi/toyota-innova-executive-taxi-service-in-jhansi.php");
addOption("JhansiSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/jhansi/toyota-innova-crysta-suv-taxi-service-in-jhansi.php");
addOption("JhansiSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/jhansi/tata-safari-suv-taxi-service-in-jhansi.php");
addOption("JhansiSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/jhansi/toyota-fortuner-suv-taxi-service-in-jhansi.php");

addOption("JhansiLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("JhansiLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/jhansi/pajero-and-endeavour-luxury-taxi-service-in-jhansi.php");
addOption("JhansiLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/jhansi/toyota-fortuner-suv-taxi-service-in-jhansi.php");
addOption("JhansiLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/jhansi/camry-and-altis-luxury-taxi-service-in-jhansi.php");
addOption("JhansiLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/jhansi/skoda-luxury-taxi-service-in-jhansi.php");
addOption("JhansiLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/jhansi/mercedes-c-class-luxury-taxi-service-in-jhansi.php");
addOption("JhansiLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/jhansi/mercedes-e-class-luxury-taxi-service-in-jhansi.php");
addOption("JhansiLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/jhansi/mercedes-s-class-luxury-taxi-service-in-jhansi.php");
addOption("JhansiLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/jhansi/bmw-x5-or-x7-luxury-taxi-service-in-jhansi.php");
addOption("JhansiLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/jhansi/mercedes-benz-gls-luxury-taxi-service-in-jhansi.php");

addOption("JhansiTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("JhansiTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/jhansi/13-seater-ac-tempo-traveller-rental-service-in-jhansi.php");
addOption("JhansiTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/jhansi/17-seater-ac-tempo-traveller-rental-service-in-jhansi.php");
addOption("JhansiTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/jhansi/17-seater-urbania-luxury-van-rental-service-in-jhansi.php");
addOption("JhansiTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/jhansi/25-seater-ac-tempo-traveller-rental-service-in-jhansi.php");

addOption("JhansiCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("JhansiCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/jhansi/small-ac-caravan-3-beded-rental-service-in-jhansi.php");
addOption("JhansiCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/jhansi/big-ac-caravan-8-beded-rental-service-in-jhansi.php");

addOption("JhansiNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("JhansiNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/24-seater-non-ac-tourist-coach-rental-service-in-jhansi.php");
addOption("JhansiNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/28-seater-non-ac-tourist-coach-rental-service-in-jhansi.php");
addOption("JhansiNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/35-seater-non-ac-tourist-coach-rental-service-in-jhansi.php");
addOption("JhansiNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/40-seater-non-ac-tourist-coach-rental-service-in-jhansi.php");
addOption("JhansiNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/45-seater-non-ac-tourist-coach-rental-service-in-jhansi.php");
addOption("JhansiNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/52-seater-non-ac-tourist-coach-rental-service-in-jhansi.php");

addOption("JhansiAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("JhansiAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/30-seater-ac-luxury-coach-rental-service-in-jhansi.php");
addOption("JhansiAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/35-seater-ac-luxury-coach-rental-service-in-jhansi.php");
addOption("JhansiAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/40-seater-ac-luxury-coach-rental-service-in-jhansi.php");
addOption("JhansiAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/jhansi/45-seater-ac-luxury-coach-rental-service-in-jhansi.php");
addOption("JhansiAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/jhansi/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-jhansi.php");

addOption("Nagpur", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Nagpur", "Economy Cars", "", "NagpurEconomy");
addList("Nagpur", "Executive Cars", "", "NagpurExecutive");
addList("Nagpur", "SUV'S / Vans", "", "NagpurSUV'S");
addList("Nagpur", "Luxury Cars", "", "NagpurLuxury");
addList("Nagpur", "Tempo Travellers", "", "NagpurTempo");
addList("Nagpur", "AC Caravans", "", "NagpurCaravans");
addList("Nagpur", "NON AC Tourist Coaches", "", "NagpurNON Coaches");
addList("Nagpur", "AC Luxury Coaches", "", "NagpurAC Coaches");

addOption("NagpurEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("NagpurEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/nagpur/alto-800-economy-taxi-service-in-nagpur.php");
addOption("NagpurEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/nagpur/tata-indigo-economy-taxi-service-in-nagpur.php");

addOption("NagpurExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("NagpurExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/nagpur/swift-dezire-executive-taxi-service-in-nagpur.php");
addOption("NagpurExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/nagpur/toyota-etios-executive-taxi-service-in-nagpur.php");
addOption("NagpurExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/nagpur/honda-city-and-verna-executive-taxi-service-in-nagpur.php");
addOption("NagpurExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/nagpur/toyota-innova-executive-taxi-service-in-nagpur.php");

addOption("NagpurSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("NagpurSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/nagpur/chevrolet-tavera-suv-taxi-service-in-nagpur.php");
addOption("NagpurSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/nagpur/mahindra-xylo-suv-taxi-service-in-nagpur.php");
addOption("NagpurSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/nagpur/toyota-innova-executive-taxi-service-in-nagpur.php");
addOption("NagpurSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/nagpur/toyota-innova-crysta-suv-taxi-service-in-nagpur.php");
addOption("NagpurSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/nagpur/tata-safari-suv-taxi-service-in-nagpur.php");
addOption("NagpurSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/nagpur/toyota-fortuner-suv-taxi-service-in-nagpur.php");

addOption("NagpurLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("NagpurLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/nagpur/pajero-and-endeavour-luxury-taxi-service-in-nagpur.php");
addOption("NagpurLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/nagpur/toyota-fortuner-suv-taxi-service-in-nagpur.php");
addOption("NagpurLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/nagpur/camry-and-altis-luxury-taxi-service-in-nagpur.php");
addOption("NagpurLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/nagpur/skoda-luxury-taxi-service-in-nagpur.php");
addOption("NagpurLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/nagpur/mercedes-c-class-luxury-taxi-service-in-nagpur.php");
addOption("NagpurLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/nagpur/mercedes-e-class-luxury-taxi-service-in-nagpur.php");
addOption("NagpurLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/nagpur/mercedes-s-class-luxury-taxi-service-in-nagpur.php");
addOption("NagpurLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/nagpur/bmw-x5-or-x7-luxury-taxi-service-in-nagpur.php");
addOption("NagpurLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/nagpur/mercedes-benz-gls-luxury-taxi-service-in-nagpur.php");

addOption("NagpurTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("NagpurTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/nagpur/13-seater-ac-tempo-traveller-rental-service-in-nagpur.php");
addOption("NagpurTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/nagpur/17-seater-ac-tempo-traveller-rental-service-in-nagpur.php");
addOption("NagpurTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/nagpur/17-seater-urbania-luxury-van-rental-service-in-nagpur.php");
addOption("NagpurTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/nagpur/25-seater-ac-tempo-traveller-rental-service-in-nagpur.php");

addOption("NagpurCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("NagpurCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/nagpur/small-ac-caravan-3-beded-rental-service-in-nagpur.php");
addOption("NagpurCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/nagpur/big-ac-caravan-8-beded-rental-service-in-nagpur.php");

addOption("NagpurNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("NagpurNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/24-seater-non-ac-tourist-coach-rental-service-in-nagpur.php");
addOption("NagpurNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/28-seater-non-ac-tourist-coach-rental-service-in-nagpur.php");
addOption("NagpurNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/35-seater-non-ac-tourist-coach-rental-service-in-nagpur.php");
addOption("NagpurNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/40-seater-non-ac-tourist-coach-rental-service-in-nagpur.php");
addOption("NagpurNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/45-seater-non-ac-tourist-coach-rental-service-in-nagpur.php");
addOption("NagpurNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/52-seater-non-ac-tourist-coach-rental-service-in-nagpur.php");

addOption("NagpurAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("NagpurAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/30-seater-ac-luxury-coach-rental-service-in-nagpur.php");
addOption("NagpurAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/35-seater-ac-luxury-coach-rental-service-in-nagpur.php");
addOption("NagpurAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/40-seater-ac-luxury-coach-rental-service-in-nagpur.php");
addOption("NagpurAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/nagpur/45-seater-ac-luxury-coach-rental-service-in-nagpur.php");
addOption("NagpurAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/nagpur/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-nagpur.php");

addOption("Kanpur", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Kanpur", "Economy Cars", "", "KanpurEconomy");
addList("Kanpur", "Executive Cars", "", "KanpurExecutive");
addList("Kanpur", "SUV'S / Vans", "", "KanpurSUV'S");
addList("Kanpur", "Luxury Cars", "", "KanpurLuxury");
addList("Kanpur", "Tempo Travellers", "", "KanpurTempo");
addList("Kanpur", "AC Caravans", "", "KanpurCaravans");
addList("Kanpur", "NON AC Tourist Coaches", "", "KanpurNON Coaches");
addList("Kanpur", "AC Luxury Coaches", "", "KanpurAC Coaches");

addOption("KanpurEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("KanpurEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/kanpur/alto-800-economy-taxi-service-in-kanpur.php");
addOption("KanpurEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/kanpur/tata-indigo-economy-taxi-service-in-kanpur.php");

addOption("KanpurExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("KanpurExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/kanpur/swift-dezire-executive-taxi-service-in-kanpur.php");
addOption("KanpurExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/kanpur/toyota-etios-executive-taxi-service-in-kanpur.php");
addOption("KanpurExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/kanpur/honda-city-and-verna-executive-taxi-service-in-kanpur.php");
addOption("KanpurExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/kanpur/toyota-innova-executive-taxi-service-in-kanpur.php");

addOption("KanpurSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("KanpurSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/kanpur/chevrolet-tavera-suv-taxi-service-in-kanpur.php");
addOption("KanpurSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/kanpur/mahindra-xylo-suv-taxi-service-in-kanpur.php");
addOption("KanpurSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/kanpur/toyota-innova-executive-taxi-service-in-kanpur.php");
addOption("KanpurSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/kanpur/toyota-innova-crysta-suv-taxi-service-in-kanpur.php");
addOption("KanpurSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/kanpur/tata-safari-suv-taxi-service-in-kanpur.php");
addOption("KanpurSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/kanpur/toyota-fortuner-suv-taxi-service-in-kanpur.php");

addOption("KanpurLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("KanpurLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/kanpur/pajero-and-endeavour-luxury-taxi-service-in-kanpur.php");
addOption("KanpurLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/kanpur/toyota-fortuner-suv-taxi-service-in-kanpur.php");
addOption("KanpurLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/kanpur/camry-and-altis-luxury-taxi-service-in-kanpur.php");
addOption("KanpurLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/kanpur/skoda-luxury-taxi-service-in-kanpur.php");
addOption("KanpurLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/kanpur/mercedes-c-class-luxury-taxi-service-in-kanpur.php");
addOption("KanpurLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/kanpur/mercedes-e-class-luxury-taxi-service-in-kanpur.php");
addOption("KanpurLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/kanpur/mercedes-s-class-luxury-taxi-service-in-kanpur.php");
addOption("KanpurLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/kanpur/bmw-x5-or-x7-luxury-taxi-service-in-kanpur.php");
addOption("KanpurLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/kanpur/mercedes-benz-gls-luxury-taxi-service-in-kanpur.php");

addOption("KanpurTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("KanpurTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/kanpur/13-seater-ac-tempo-traveller-rental-service-in-kanpur.php");
addOption("KanpurTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/kanpur/17-seater-ac-tempo-traveller-rental-service-in-kanpur.php");
addOption("KanpurTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/kanpur/17-seater-urbania-luxury-van-rental-service-in-kanpur.php");
addOption("KanpurTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/kanpur/25-seater-ac-tempo-traveller-rental-service-in-kanpur.php");

addOption("KanpurCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("KanpurCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/kanpur/small-ac-caravan-3-beded-rental-service-in-kanpur.php");
addOption("KanpurCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/kanpur/big-ac-caravan-8-beded-rental-service-in-kanpur.php");

addOption("KanpurNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("KanpurNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/24-seater-non-ac-tourist-coach-rental-service-in-kanpur.php");
addOption("KanpurNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/28-seater-non-ac-tourist-coach-rental-service-in-kanpur.php");
addOption("KanpurNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/35-seater-non-ac-tourist-coach-rental-service-in-kanpur.php");
addOption("KanpurNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/40-seater-non-ac-tourist-coach-rental-service-in-kanpur.php");
addOption("KanpurNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/45-seater-non-ac-tourist-coach-rental-service-in-kanpur.php");
addOption("KanpurNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/52-seater-non-ac-tourist-coach-rental-service-in-kanpur.php");

addOption("KanpurAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("KanpurAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/30-seater-ac-luxury-coach-rental-service-in-kanpur.php");
addOption("KanpurAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/35-seater-ac-luxury-coach-rental-service-in-kanpur.php");
addOption("KanpurAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/40-seater-ac-luxury-coach-rental-service-in-kanpur.php");
addOption("KanpurAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/kanpur/45-seater-ac-luxury-coach-rental-service-in-kanpur.php");
addOption("KanpurAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/kanpur/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-kanpur.php");

addOption("Nashik", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Nashik", "Economy Cars", "", "NashikEconomy");
addList("Nashik", "Executive Cars", "", "NashikExecutive");
addList("Nashik", "SUV'S / Vans", "", "NashikSUV'S");
addList("Nashik", "Luxury Cars", "", "NashikLuxury");
addList("Nashik", "Tempo Travellers", "", "NashikTempo");
addList("Nashik", "AC Caravans", "", "NashikCaravans");
addList("Nashik", "NON AC Tourist Coaches", "", "NashikNON Coaches");
addList("Nashik", "AC Luxury Coaches", "", "NashikAC Coaches");

addOption("NashikEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("NashikEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/nashik/alto-800-economy-taxi-service-in-nashik.php");
addOption("NashikEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/nashik/tata-indigo-economy-taxi-service-in-nashik.php");

addOption("NashikExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("NashikExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/nashik/swift-dezire-executive-taxi-service-in-nashik.php");
addOption("NashikExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/nashik/toyota-etios-executive-taxi-service-in-nashik.php");
addOption("NashikExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/nashik/honda-city-and-verna-executive-taxi-service-in-nashik.php");
addOption("NashikExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/nashik/toyota-innova-executive-taxi-service-in-nashik.php");

addOption("NashikSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("NashikSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/nashik/chevrolet-tavera-suv-taxi-service-in-nashik.php");
addOption("NashikSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/nashik/mahindra-xylo-suv-taxi-service-in-nashik.php");
addOption("NashikSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/nashik/toyota-innova-executive-taxi-service-in-nashik.php");
addOption("NashikSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/nashik/toyota-innova-crysta-suv-taxi-service-in-nashik.php");
addOption("NashikSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/nashik/tata-safari-suv-taxi-service-in-nashik.php");
addOption("NashikSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/nashik/toyota-fortuner-suv-taxi-service-in-nashik.php");

addOption("NashikLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("NashikLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/nashik/pajero-and-endeavour-luxury-taxi-service-in-nashik.php");
addOption("NashikLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/nashik/toyota-fortuner-suv-taxi-service-in-nashik.php");
addOption("NashikLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/nashik/camry-and-altis-luxury-taxi-service-in-nashik.php");
addOption("NashikLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/nashik/skoda-luxury-taxi-service-in-nashik.php");
addOption("NashikLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/nashik/mercedes-c-class-luxury-taxi-service-in-nashik.php");
addOption("NashikLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/nashik/mercedes-e-class-luxury-taxi-service-in-nashik.php");
addOption("NashikLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/nashik/mercedes-s-class-luxury-taxi-service-in-nashik.php");
addOption("NashikLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/nashik/bmw-x5-or-x7-luxury-taxi-service-in-nashik.php");
addOption("NashikLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/nashik/mercedes-benz-gls-luxury-taxi-service-in-nashik.php");

addOption("NashikTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("NashikTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/nashik/13-seater-ac-tempo-traveller-rental-service-in-nashik.php");
addOption("NashikTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/nashik/17-seater-ac-tempo-traveller-rental-service-in-nashik.php");
addOption("NashikTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/nashik/17-seater-urbania-luxury-van-rental-service-in-nashik.php");
addOption("NashikTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/nashik/25-seater-ac-tempo-traveller-rental-service-in-nashik.php");

addOption("NashikCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("NashikCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/nashik/small-ac-caravan-3-beded-rental-service-in-nashik.php");
addOption("NashikCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/nashik/big-ac-caravan-8-beded-rental-service-in-nashik.php");

addOption("NashikNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("NashikNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/24-seater-non-ac-tourist-coach-rental-service-in-nashik.php");
addOption("NashikNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/28-seater-non-ac-tourist-coach-rental-service-in-nashik.php");
addOption("NashikNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/35-seater-non-ac-tourist-coach-rental-service-in-nashik.php");
addOption("NashikNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/40-seater-non-ac-tourist-coach-rental-service-in-nashik.php");
addOption("NashikNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/45-seater-non-ac-tourist-coach-rental-service-in-nashik.php");
addOption("NashikNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/52-seater-non-ac-tourist-coach-rental-service-in-nashik.php");

addOption("NashikAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("NashikAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/30-seater-ac-luxury-coach-rental-service-in-nashik.php");
addOption("NashikAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/35-seater-ac-luxury-coach-rental-service-in-nashik.php");
addOption("NashikAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/40-seater-ac-luxury-coach-rental-service-in-nashik.php");
addOption("NashikAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/nashik/45-seater-ac-luxury-coach-rental-service-in-nashik.php");
addOption("NashikAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/nashik/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-nashik.php");

addOption("Aurangabad", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Aurangabad", "Economy Cars", "", "AurangabadEconomy");
addList("Aurangabad", "Executive Cars", "", "AurangabadExecutive");
addList("Aurangabad", "SUV'S / Vans", "", "AurangabadSUV'S");
addList("Aurangabad", "Luxury Cars", "", "AurangabadLuxury");
addList("Aurangabad", "Tempo Travellers", "", "AurangabadTempo");
addList("Aurangabad", "AC Caravans", "", "AurangabadCaravans");
addList("Aurangabad", "NON AC Tourist Coaches", "", "AurangabadNON Coaches");
addList("Aurangabad", "AC Luxury Coaches", "", "AurangabadAC Coaches");

addOption("AurangabadEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("AurangabadEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/aurangabad/alto-800-economy-taxi-service-in-aurangabad.php");
addOption("AurangabadEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/aurangabad/tata-indigo-economy-taxi-service-in-aurangabad.php");

addOption("AurangabadExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("AurangabadExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/aurangabad/swift-dezire-executive-taxi-service-in-aurangabad.php");
addOption("AurangabadExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/aurangabad/toyota-etios-executive-taxi-service-in-aurangabad.php");
addOption("AurangabadExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/aurangabad/honda-city-and-verna-executive-taxi-service-in-aurangabad.php");
addOption("AurangabadExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/aurangabad/toyota-innova-executive-taxi-service-in-aurangabad.php");

addOption("AurangabadSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("AurangabadSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/aurangabad/chevrolet-tavera-suv-taxi-service-in-aurangabad.php");
addOption("AurangabadSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/aurangabad/mahindra-xylo-suv-taxi-service-in-aurangabad.php");
addOption("AurangabadSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/aurangabad/toyota-innova-executive-taxi-service-in-aurangabad.php");
addOption("AurangabadSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/aurangabad/toyota-innova-crysta-suv-taxi-service-in-aurangabad.php");
addOption("AurangabadSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/aurangabad/tata-safari-suv-taxi-service-in-aurangabad.php");
addOption("AurangabadSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/aurangabad/toyota-fortuner-suv-taxi-service-in-aurangabad.php");

addOption("AurangabadLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("AurangabadLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/aurangabad/pajero-and-endeavour-luxury-taxi-service-in-aurangabad.php");
addOption("AurangabadLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/aurangabad/toyota-fortuner-suv-taxi-service-in-aurangabad.php");
addOption("AurangabadLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/aurangabad/camry-and-altis-luxury-taxi-service-in-aurangabad.php");
addOption("AurangabadLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/aurangabad/skoda-luxury-taxi-service-in-aurangabad.php");
addOption("AurangabadLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/aurangabad/mercedes-c-class-luxury-taxi-service-in-aurangabad.php");
addOption("AurangabadLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/aurangabad/mercedes-e-class-luxury-taxi-service-in-aurangabad.php");
addOption("AurangabadLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/aurangabad/mercedes-s-class-luxury-taxi-service-in-aurangabad.php");
addOption("AurangabadLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/aurangabad/bmw-x5-or-x7-luxury-taxi-service-in-aurangabad.php");
addOption("AurangabadLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/aurangabad/mercedes-benz-gls-luxury-taxi-service-in-aurangabad.php");

addOption("AurangabadTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("AurangabadTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/aurangabad/13-seater-ac-tempo-traveller-rental-service-in-aurangabad.php");
addOption("AurangabadTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/aurangabad/17-seater-ac-tempo-traveller-rental-service-in-aurangabad.php");
addOption("AurangabadTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/aurangabad/17-seater-urbania-luxury-van-rental-service-in-aurangabad.php");
addOption("AurangabadTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/aurangabad/25-seater-ac-tempo-traveller-rental-service-in-aurangabad.php");

addOption("AurangabadCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("AurangabadCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/aurangabad/small-ac-caravan-3-beded-rental-service-in-aurangabad.php");
addOption("AurangabadCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/aurangabad/big-ac-caravan-8-beded-rental-service-in-aurangabad.php");

addOption("AurangabadNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("AurangabadNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/24-seater-non-ac-tourist-coach-rental-service-in-aurangabad.php");
addOption("AurangabadNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/28-seater-non-ac-tourist-coach-rental-service-in-aurangabad.php");
addOption("AurangabadNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/35-seater-non-ac-tourist-coach-rental-service-in-aurangabad.php");
addOption("AurangabadNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/40-seater-non-ac-tourist-coach-rental-service-in-aurangabad.php");
addOption("AurangabadNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/45-seater-non-ac-tourist-coach-rental-service-in-aurangabad.php");
addOption("AurangabadNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/52-seater-non-ac-tourist-coach-rental-service-in-aurangabad.php");

addOption("AurangabadAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("AurangabadAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/30-seater-ac-luxury-coach-rental-service-in-aurangabad.php");
addOption("AurangabadAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/35-seater-ac-luxury-coach-rental-service-in-aurangabad.php");
addOption("AurangabadAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/40-seater-ac-luxury-coach-rental-service-in-aurangabad.php");
addOption("AurangabadAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/aurangabad/45-seater-ac-luxury-coach-rental-service-in-aurangabad.php");
addOption("AurangabadAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/aurangabad/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-aurangabad.php");

addOption("Ahmedabad", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Ahmedabad", "Economy Cars", "", "AhmedabadEconomy");
addList("Ahmedabad", "Executive Cars", "", "AhmedabadExecutive");
addList("Ahmedabad", "SUV'S / Vans", "", "AhmedabadSUV'S");
addList("Ahmedabad", "Luxury Cars", "", "AhmedabadLuxury");
addList("Ahmedabad", "Tempo Travellers", "", "AhmedabadTempo");
addList("Ahmedabad", "AC Caravans", "", "AhmedabadCaravans");
addList("Ahmedabad", "NON AC Tourist Coaches", "", "AhmedabadNON Coaches");
addList("Ahmedabad", "AC Luxury Coaches", "", "AhmedabadAC Coaches");

addOption("AhmedabadEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("AhmedabadEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/ahmedabad/alto-800-economy-taxi-service-in-ahmedabad.php");
addOption("AhmedabadEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/ahmedabad/tata-indigo-economy-taxi-service-in-ahmedabad.php");

addOption("AhmedabadExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("AhmedabadExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/ahmedabad/swift-dezire-executive-taxi-service-in-ahmedabad.php");
addOption("AhmedabadExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/ahmedabad/toyota-etios-executive-taxi-service-in-ahmedabad.php");
addOption("AhmedabadExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/ahmedabad/honda-city-and-verna-executive-taxi-service-in-ahmedabad.php");
addOption("AhmedabadExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/ahmedabad/toyota-innova-executive-taxi-service-in-ahmedabad.php");

addOption("AhmedabadSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("AhmedabadSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/ahmedabad/chevrolet-tavera-suv-taxi-service-in-ahmedabad.php");
addOption("AhmedabadSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/ahmedabad/mahindra-xylo-suv-taxi-service-in-ahmedabad.php");
addOption("AhmedabadSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/ahmedabad/toyota-innova-executive-taxi-service-in-ahmedabad.php");
addOption("AhmedabadSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/ahmedabad/toyota-innova-crysta-suv-taxi-service-in-ahmedabad.php");
addOption("AhmedabadSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/ahmedabad/tata-safari-suv-taxi-service-in-ahmedabad.php");
addOption("AhmedabadSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/ahmedabad/toyota-fortuner-suv-taxi-service-in-ahmedabad.php");

addOption("AhmedabadLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("AhmedabadLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/ahmedabad/pajero-and-endeavour-luxury-taxi-service-in-ahmedabad.php");
addOption("AhmedabadLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/ahmedabad/toyota-fortuner-suv-taxi-service-in-ahmedabad.php");
addOption("AhmedabadLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/ahmedabad/camry-and-altis-luxury-taxi-service-in-ahmedabad.php");
addOption("AhmedabadLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/ahmedabad/skoda-luxury-taxi-service-in-ahmedabad.php");
addOption("AhmedabadLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/ahmedabad/mercedes-c-class-luxury-taxi-service-in-ahmedabad.php");
addOption("AhmedabadLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/ahmedabad/mercedes-e-class-luxury-taxi-service-in-ahmedabad.php");
addOption("AhmedabadLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/ahmedabad/mercedes-s-class-luxury-taxi-service-in-ahmedabad.php");
addOption("AhmedabadLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/ahmedabad/bmw-x5-or-x7-luxury-taxi-service-in-ahmedabad.php");
addOption("AhmedabadLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/ahmedabad/mercedes-benz-gls-luxury-taxi-service-in-ahmedabad.php");

addOption("AhmedabadTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("AhmedabadTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/ahmedabad/13-seater-ac-tempo-traveller-rental-service-in-ahmedabad.php");
addOption("AhmedabadTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/ahmedabad/17-seater-ac-tempo-traveller-rental-service-in-ahmedabad.php");
addOption("AhmedabadTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/ahmedabad/17-seater-urbania-luxury-van-rental-service-in-ahmedabad.php");
addOption("AhmedabadTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/ahmedabad/25-seater-ac-tempo-traveller-rental-service-in-ahmedabad.php");

addOption("AhmedabadCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("AhmedabadCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/ahmedabad/small-ac-caravan-3-beded-rental-service-in-ahmedabad.php");
addOption("AhmedabadCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/ahmedabad/big-ac-caravan-8-beded-rental-service-in-ahmedabad.php");

addOption("AhmedabadNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("AhmedabadNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/24-seater-non-ac-tourist-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/28-seater-non-ac-tourist-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/35-seater-non-ac-tourist-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/40-seater-non-ac-tourist-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/45-seater-non-ac-tourist-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/52-seater-non-ac-tourist-coach-rental-service-in-ahmedabad.php");

addOption("AhmedabadAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("AhmedabadAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/30-seater-ac-luxury-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/35-seater-ac-luxury-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/40-seater-ac-luxury-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/ahmedabad/45-seater-ac-luxury-coach-rental-service-in-ahmedabad.php");
addOption("AhmedabadAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/ahmedabad/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-ahmedabad.php");

addOption("Surat", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Surat", "Economy Cars", "", "SuratEconomy");
addList("Surat", "Executive Cars", "", "SuratExecutive");
addList("Surat", "SUV'S / Vans", "", "SuratSUV'S");
addList("Surat", "Luxury Cars", "", "SuratLuxury");
addList("Surat", "Tempo Travellers", "", "SuratTempo");
addList("Surat", "AC Caravans", "", "SuratCaravans");
addList("Surat", "NON AC Tourist Coaches", "", "SuratNON Coaches");
addList("Surat", "AC Luxury Coaches", "", "SuratAC Coaches");

addOption("SuratEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("SuratEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/surat/alto-800-economy-taxi-service-in-surat.php");
addOption("SuratEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/surat/tata-indigo-economy-taxi-service-in-surat.php");

addOption("SuratExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("SuratExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/surat/swift-dezire-executive-taxi-service-in-surat.php");
addOption("SuratExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/surat/toyota-etios-executive-taxi-service-in-surat.php");
addOption("SuratExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/surat/honda-city-and-verna-executive-taxi-service-in-surat.php");
addOption("SuratExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/surat/toyota-innova-executive-taxi-service-in-surat.php");

addOption("SuratSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("SuratSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/surat/chevrolet-tavera-suv-taxi-service-in-surat.php");
addOption("SuratSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/surat/mahindra-xylo-suv-taxi-service-in-surat.php");
addOption("SuratSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/surat/toyota-innova-executive-taxi-service-in-surat.php");
addOption("SuratSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/surat/toyota-innova-crysta-suv-taxi-service-in-surat.php");
addOption("SuratSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/surat/tata-safari-suv-taxi-service-in-surat.php");
addOption("SuratSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/surat/toyota-fortuner-suv-taxi-service-in-surat.php");

addOption("SuratLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("SuratLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/surat/pajero-and-endeavour-luxury-taxi-service-in-surat.php");
addOption("SuratLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/surat/toyota-fortuner-suv-taxi-service-in-surat.php");
addOption("SuratLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/surat/camry-and-altis-luxury-taxi-service-in-surat.php");
addOption("SuratLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/surat/skoda-luxury-taxi-service-in-surat.php");
addOption("SuratLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/surat/mercedes-c-class-luxury-taxi-service-in-surat.php");
addOption("SuratLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/surat/mercedes-e-class-luxury-taxi-service-in-surat.php");
addOption("SuratLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/surat/mercedes-s-class-luxury-taxi-service-in-surat.php");
addOption("SuratLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/surat/bmw-x5-or-x7-luxury-taxi-service-in-surat.php");
addOption("SuratLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/surat/mercedes-benz-gls-luxury-taxi-service-in-surat.php");

addOption("SuratTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("SuratTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/surat/13-seater-ac-tempo-traveller-rental-service-in-surat.php");
addOption("SuratTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/surat/17-seater-ac-tempo-traveller-rental-service-in-surat.php");
addOption("SuratTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/surat/17-seater-urbania-luxury-van-rental-service-in-surat.php");
addOption("SuratTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/surat/25-seater-ac-tempo-traveller-rental-service-in-surat.php");

addOption("SuratCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("SuratCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/surat/small-ac-caravan-3-beded-rental-service-in-surat.php");
addOption("SuratCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/surat/big-ac-caravan-8-beded-rental-service-in-surat.php");

addOption("SuratNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("SuratNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/surat/24-seater-non-ac-tourist-coach-rental-service-in-surat.php");
addOption("SuratNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/surat/28-seater-non-ac-tourist-coach-rental-service-in-surat.php");
addOption("SuratNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/surat/35-seater-non-ac-tourist-coach-rental-service-in-surat.php");
addOption("SuratNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/surat/40-seater-non-ac-tourist-coach-rental-service-in-surat.php");
addOption("SuratNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/surat/45-seater-non-ac-tourist-coach-rental-service-in-surat.php");
addOption("SuratNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/surat/52-seater-non-ac-tourist-coach-rental-service-in-surat.php");

addOption("SuratAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("SuratAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/surat/30-seater-ac-luxury-coach-rental-service-in-surat.php");
addOption("SuratAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/surat/35-seater-ac-luxury-coach-rental-service-in-surat.php");
addOption("SuratAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/surat/40-seater-ac-luxury-coach-rental-service-in-surat.php");
addOption("SuratAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/surat/45-seater-ac-luxury-coach-rental-service-in-surat.php");
addOption("SuratAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/surat/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-surat.php");

addOption("Udaipur", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Udaipur", "Economy Cars", "", "UdaipurEconomy");
addList("Udaipur", "Executive Cars", "", "UdaipurExecutive");
addList("Udaipur", "SUV'S / Vans", "", "UdaipurSUV'S");
addList("Udaipur", "Luxury Cars", "", "UdaipurLuxury");
addList("Udaipur", "Tempo Travellers", "", "UdaipurTempo");
addList("Udaipur", "AC Caravans", "", "UdaipurCaravans");
addList("Udaipur", "NON AC Tourist Coaches", "", "UdaipurNON Coaches");
addList("Udaipur", "AC Luxury Coaches", "", "UdaipurAC Coaches");

addOption("UdaipurEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("UdaipurEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/udaipur/alto-800-economy-taxi-service-in-udaipur.php");
addOption("UdaipurEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/udaipur/tata-indigo-economy-taxi-service-in-udaipur.php");

addOption("UdaipurExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("UdaipurExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/udaipur/swift-dezire-executive-taxi-service-in-udaipur.php");
addOption("UdaipurExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/udaipur/toyota-etios-executive-taxi-service-in-udaipur.php");
addOption("UdaipurExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/udaipur/honda-city-and-verna-executive-taxi-service-in-udaipur.php");
addOption("UdaipurExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/udaipur/toyota-innova-executive-taxi-service-in-udaipur.php");

addOption("UdaipurSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("UdaipurSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/udaipur/chevrolet-tavera-suv-taxi-service-in-udaipur.php");
addOption("UdaipurSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/udaipur/mahindra-xylo-suv-taxi-service-in-udaipur.php");
addOption("UdaipurSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/udaipur/toyota-innova-executive-taxi-service-in-udaipur.php");
addOption("UdaipurSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/udaipur/toyota-innova-crysta-suv-taxi-service-in-udaipur.php");
addOption("UdaipurSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/udaipur/tata-safari-suv-taxi-service-in-udaipur.php");
addOption("UdaipurSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/udaipur/toyota-fortuner-suv-taxi-service-in-udaipur.php");

addOption("UdaipurLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("UdaipurLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/udaipur/pajero-and-endeavour-luxury-taxi-service-in-udaipur.php");
addOption("UdaipurLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/udaipur/toyota-fortuner-suv-taxi-service-in-udaipur.php");
addOption("UdaipurLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/udaipur/camry-and-altis-luxury-taxi-service-in-udaipur.php");
addOption("UdaipurLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/udaipur/skoda-luxury-taxi-service-in-udaipur.php");
addOption("UdaipurLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/udaipur/mercedes-c-class-luxury-taxi-service-in-udaipur.php");
addOption("UdaipurLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/udaipur/mercedes-e-class-luxury-taxi-service-in-udaipur.php");
addOption("UdaipurLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/udaipur/mercedes-s-class-luxury-taxi-service-in-udaipur.php");
addOption("UdaipurLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/udaipur/bmw-x5-or-x7-luxury-taxi-service-in-udaipur.php");
addOption("UdaipurLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/udaipur/mercedes-benz-gls-luxury-taxi-service-in-udaipur.php");

addOption("UdaipurTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("UdaipurTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/udaipur/13-seater-ac-tempo-traveller-rental-service-in-udaipur.php");
addOption("UdaipurTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/udaipur/17-seater-ac-tempo-traveller-rental-service-in-udaipur.php");
addOption("UdaipurTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/udaipur/17-seater-urbania-luxury-van-rental-service-in-udaipur.php");
addOption("UdaipurTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/udaipur/25-seater-ac-tempo-traveller-rental-service-in-udaipur.php");

addOption("UdaipurCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("UdaipurCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/udaipur/small-ac-caravan-3-beded-rental-service-in-udaipur.php");
addOption("UdaipurCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/udaipur/big-ac-caravan-8-beded-rental-service-in-udaipur.php");

addOption("UdaipurNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("UdaipurNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/24-seater-non-ac-tourist-coach-rental-service-in-udaipur.php");
addOption("UdaipurNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/28-seater-non-ac-tourist-coach-rental-service-in-udaipur.php");
addOption("UdaipurNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/35-seater-non-ac-tourist-coach-rental-service-in-udaipur.php");
addOption("UdaipurNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/40-seater-non-ac-tourist-coach-rental-service-in-udaipur.php");
addOption("UdaipurNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/45-seater-non-ac-tourist-coach-rental-service-in-udaipur.php");
addOption("UdaipurNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/52-seater-non-ac-tourist-coach-rental-service-in-udaipur.php");

addOption("UdaipurAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("UdaipurAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/30-seater-ac-luxury-coach-rental-service-in-udaipur.php");
addOption("UdaipurAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/35-seater-ac-luxury-coach-rental-service-in-udaipur.php");
addOption("UdaipurAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/40-seater-ac-luxury-coach-rental-service-in-udaipur.php");
addOption("UdaipurAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/udaipur/45-seater-ac-luxury-coach-rental-service-in-udaipur.php");
addOption("UdaipurAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/udaipur/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-udaipur.php");

addOption("Ambikapur", "Select Car and Coach", "", 1); //HEADER OPTION
addList("Ambikapur", "Economy Cars", "", "AmbikapurEconomy");
addList("Ambikapur", "Executive Cars", "", "AmbikapurExecutive");
addList("Ambikapur", "SUV'S / Vans", "", "AmbikapurSUV'S");
addList("Ambikapur", "Luxury Cars", "", "AmbikapurLuxury");
addList("Ambikapur", "Tempo Travellers", "", "AmbikapurTempo");
addList("Ambikapur", "AC Caravans", "", "AmbikapurCaravans");
addList("Ambikapur", "NON AC Tourist Coaches", "", "AmbikapurNON Coaches");
addList("Ambikapur", "AC Luxury Coaches", "", "AmbikapurAC Coaches");

addOption("AmbikapurEconomy", "Select Economy Car", "", 1); //HEADER OPTION
addOption("AmbikapurEconomy", "Alto 800 / Eon", "https://www.mptourandtravels.com/taxi-services/ambikapur/alto-800-economy-taxi-service-in-ambikapur.php");
addOption("AmbikapurEconomy", "Tata Indigo", "https://www.mptourandtravels.com/taxi-services/ambikapur/tata-indigo-economy-taxi-service-in-ambikapur.php");

addOption("AmbikapurExecutive", "Select Executive Car", "", 1); //HEADER OPTION
addOption("AmbikapurExecutive", "Tata Zest / Swift Dezire", "https://www.mptourandtravels.com/taxi-services/ambikapur/swift-dezire-executive-taxi-service-in-ambikapur.php");
addOption("AmbikapurExecutive", "Toyota Etios / Ciaz", "https://www.mptourandtravels.com/taxi-services/ambikapur/toyota-etios-executive-taxi-service-in-ambikapur.php");
addOption("AmbikapurExecutive", "Honda City / Verna", "https://www.mptourandtravels.com/taxi-services/ambikapur/honda-city-and-verna-executive-taxi-service-in-ambikapur.php");
addOption("AmbikapurExecutive", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/ambikapur/toyota-innova-executive-taxi-service-in-ambikapur.php");

addOption("AmbikapurSUV'S", "Select SUV'S / Vans", "", 1); //HEADER OPTION
addOption("AmbikapurSUV'S", "Chevrolet Tavera", "https://www.mptourandtravels.com/taxi-services/ambikapur/chevrolet-tavera-suv-taxi-service-in-ambikapur.php");
addOption("AmbikapurSUV'S", "Mahindra XYLO", "https://www.mptourandtravels.com/taxi-services/ambikapur/mahindra-xylo-suv-taxi-service-in-ambikapur.php");
addOption("AmbikapurSUV'S", "Toyota Innova", "https://www.mptourandtravels.com/taxi-services/ambikapur/toyota-innova-executive-taxi-service-in-ambikapur.php");
addOption("AmbikapurSUV'S", "Toyota Innova Crysta", "https://www.mptourandtravels.com/taxi-services/ambikapur/toyota-innova-crysta-suv-taxi-service-in-ambikapur.php");
addOption("AmbikapurSUV'S", "Tata Safari / Tata Harrier", "https://www.mptourandtravels.com/taxi-services/ambikapur/tata-safari-suv-taxi-service-in-ambikapur.php");
addOption("AmbikapurSUV'S", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/ambikapur/toyota-fortuner-suv-taxi-service-in-ambikapur.php");

addOption("AmbikapurLuxury", "Select Luxury Cars", "", 1); //HEADER OPTION
addOption("AmbikapurLuxury", "Pajero / Endeavour", "https://www.mptourandtravels.com/taxi-services/ambikapur/pajero-and-endeavour-luxury-taxi-service-in-ambikapur.php");
addOption("AmbikapurLuxury", "Fortuner New", "https://www.mptourandtravels.com/taxi-services/ambikapur/toyota-fortuner-suv-taxi-service-in-ambikapur.php");
addOption("AmbikapurLuxury", "Toyota Camry / Altis", "https://www.mptourandtravels.com/taxi-services/ambikapur/camry-and-altis-luxury-taxi-service-in-ambikapur.php");
addOption("AmbikapurLuxury", "Skoda", "https://www.mptourandtravels.com/taxi-services/ambikapur/skoda-luxury-taxi-service-in-ambikapur.php");
addOption("AmbikapurLuxury", "Mercedes C-Class / Audi A4", "https://www.mptourandtravels.com/taxi-services/ambikapur/mercedes-c-class-luxury-taxi-service-in-ambikapur.php");
addOption("AmbikapurLuxury", "Mercedes E-Class / BMW 3 Series", "https://www.mptourandtravels.com/taxi-services/ambikapur/mercedes-e-class-luxury-taxi-service-in-ambikapur.php");
addOption("AmbikapurLuxury", "Mercedes S-Class", "https://www.mptourandtravels.com/taxi-services/ambikapur/mercedes-s-class-luxury-taxi-service-in-ambikapur.php");
addOption("AmbikapurLuxury", "BMW X1 Or X7", "https://www.mptourandtravels.com/taxi-services/ambikapur/bmw-x5-or-x7-luxury-taxi-service-in-ambikapur.php");
addOption("AmbikapurLuxury", "Mercedes Benz GLS", "https://www.mptourandtravels.com/taxi-services/ambikapur/mercedes-benz-gls-luxury-taxi-service-in-ambikapur.php");

addOption("AmbikapurTempo", "Select Tempo Travellers", "", 1); //HEADER OPTION
addOption("AmbikapurTempo", "Tempo Traveller 13 Seater AC", "https://www.mptourandtravels.com/taxi-services/ambikapur/13-seater-ac-tempo-traveller-rental-service-in-ambikapur.php");
addOption("AmbikapurTempo", "Tempo Traveller 17 Seater AC", "https://www.mptourandtravels.com/taxi-services/ambikapur/17-seater-ac-tempo-traveller-rental-service-in-ambikapur.php");
addOption("AmbikapurTempo", "Urbania 17 Seater Luxury AC", "https://www.mptourandtravels.com/taxi-services/ambikapur/17-seater-urbania-luxury-van-rental-service-in-ambikapur.php");
addOption("AmbikapurTempo", "Tempo Traveller 25 Seater AC", "https://www.mptourandtravels.com/taxi-services/ambikapur/25-seater-ac-tempo-traveller-rental-service-in-ambikapur.php");

addOption("AmbikapurCaravans", "Select AC Caravans", "", 1); //HEADER OPTION
addOption("AmbikapurCaravans", "AC Caravans For (2+1) Pax (Small)", "https://www.mptourandtravels.com/taxi-services/ambikapur/small-ac-caravan-3-beded-rental-service-in-ambikapur.php");
addOption("AmbikapurCaravans", "AC Caravans For 8 Pax (Big)", "https://www.mptourandtravels.com/taxi-services/ambikapur/big-ac-caravan-8-beded-rental-service-in-ambikapur.php");

addOption("AmbikapurNON Coaches", "Select NON AC Tourist Coaches", "", 1); //HEADER OPTION
addOption("AmbikapurNON Coaches", "NON AC Tourist Coaches 24 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/24-seater-non-ac-tourist-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurNON Coaches", "NON AC Tourist Coaches 28 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/28-seater-non-ac-tourist-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurNON Coaches", "NON AC Tourist Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/35-seater-non-ac-tourist-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurNON Coaches", "NON AC Tourist Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/40-seater-non-ac-tourist-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurNON Coaches", "NON AC Tourist Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/45-seater-non-ac-tourist-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurNON Coaches", "NON AC Tourist Coaches 52 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/52-seater-non-ac-tourist-coach-rental-service-in-ambikapur.php");

addOption("AmbikapurAC Coaches", "Select AC Luxury Coaches", "", 1); //HEADER OPTION
addOption("AmbikapurAC Coaches", "AC Luxury Coaches 30 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/30-seater-ac-luxury-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurAC Coaches", "AC Luxury Coaches 35 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/35-seater-ac-luxury-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurAC Coaches", "AC Luxury Coaches 40 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/40-seater-ac-luxury-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurAC Coaches", "AC Luxury Coaches 45 Seater", "https://www.mptourandtravels.com/taxi-services/ambikapur/45-seater-ac-luxury-coach-rental-service-in-ambikapur.php");
addOption("AmbikapurAC Coaches", "AC LUXURY COACHES 45 Seater VOLVO Multi Axle", "https://www.mptourandtravels.com/taxi-services/ambikapur/45-seater-ac-luxury-volvo-multi-axle-coach-rental-service-in-ambikapur.php");