//var hide_empty_list=true; //uncomment this line to hide empty selection lists
var disable_empty_list = true; //uncomment this line to disable empty selection lists

var onclickaction = "goto" //set to "alert" or "goto". Former is for debugging purposes, to tell you the value of the final selected list that will be used as the destination URL. Set to "goto" when below configuration is all set up as desired. 

var newwindow = 0 //Open links in new window or not? 1=yes, 0=no.

/////DEFINE YOUR MENU LISTS and ITEMS below/////////////////

addListGroup("chainedmenu", "First-Select");

addOption("First-Select", "Select Hotels Type", "", 1); //HEADER OPTIO
addList("First-Select", "Major Hotels / Resorts of MP", "", "Major");
addList("First-Select", "Other City / Town Hotels", "", "Other");
addList("First-Select", "Highway Amenities / Hotels", "", "Highway");
addList("First-Select", "All", "", "All");

addOption("Major", "Select By Place", "", 1); //HEADER OPTION
addList("Major", "Amarkantak Hotels", "", "Amarkantak");
addList("Major", "Bhopal Hotels", "", "Bhopal");
addList("Major", "Bhojpur Hotels", "", "Bhojpur");
addList("Major", "Bandhavgarh Hotels", "", "Bandhavgarh");
addList("Major", "Bhedaghat Hotels", "", "Bhedaghat");
addList("Major", "Bhimbetka Hotels", "", "Bhimbetka");
addList("Major", "Chitrakoot Hotels", "", "Chitrakoot");
addList("Major", "Chanderi Hotels", "", "Chanderi");
addList("Major", "Gwalior Hotels", "", "Gwalior");
addList("Major", "Hanumantiya Hotels", "", "Hanumantiya");
addList("Major", "Indore Hotels", "", "Indore");
addList("Major", "Jabalpur Hotels", "", "Jabalpur");
addList("Major", "Kanha Hotels", "", "Kanha");
addList("Major", "Khajuraho Hotels", "", "Khajuraho");
addList("Major", "Orchha Hotels", "", "Orchha");
addList("Major", "Omkareshwar Hotels", "", "Omkareshwar");
addList("Major", "Madhai / Satpura NP Hotels", "", "Madhai");
addList("Major", "Maheshwar Hotels", "", "Maheshwar");
addList("Major", "Mandu Hotels", "", "Mandu");
addList("Major", "Pachmarhi Hotels", "", "Pachmarhi");
addList("Major", "Panna Hotels", "", "Panna");
addList("Major", "Pench Hotels", "", "Pench");
addList("Major", "Parsuli Resort", "", "Parsuli");
addList("Major", "Sailani Island", "", "Sailani");
addList("Major", "Shivpuri Hotels", "", "Shivpuri");
addList("Major", "Sonagiri Hotels", "", "Sonagiri");
addList("Major", "Sanchi Hotels", "", "Sanchi");
addList("Major", "Ujjain Hotels", "", "Ujjain");

addOption("Other", "Select By Place", "", 1); //HEADER OPTION
addList("Other", "Ashoknagar Hotels", "", "Ashoknagar");
addList("Other", "Balaghat Hotels", "", "Balaghat");
addList("Other", "Bargi Dam Hotels", "", "Bargi");
addList("Other", "Barwani Hotels", "", "Barwani");
addList("Other", "Betul Hotels", "", "Betul");
addList("Other", "Bhind Hotels", "", "Bhind");
addList("Other", "Biaora Hotels", "", "Biaora");
addList("Other", "Burhanpur Hotels", "", "Burhanpur");
addList("Other", "Chhindwara Hotels", "", "Chhindwara");
addList("Other", "Chhatarpur Hotels", "", "Chhatarpur");
addList("Other", "Chambal Hotels", "", "Chambal");
addList("Other", "Choral Hotels", "", "Choral");
addList("Other", "Datia Hotels", "", "Datia");
addList("Other", "Dhar Hotels", "", "Dhar");
addList("Other", "Dodi Hotels", "", "Dodi");
addList("Other", "Handia Hotels", "", "Handia");
addList("Other", "Hoshangabad Hotels", "", "Hoshangabad");
addList("Other", "Jhabua Hotels", "", "Jhabua");
addList("Other", "Katni Hotels", "", "Katni");
addList("Other", "Kuno Palpur Hotels", "", "Kuno");
addList("Other", "Maihar Hotels", "", "Maihar");
addList("Other", "Mandla Hotels", "", "Mandla");
addList("Other", "Mandsaur Hotels", "", "Mandsaur");
addList("Other", "Nowgaon Hotels", "", "Nowgaon");
addList("Other", "Neemuch Hotels", "", "Neemuch");
addList("Other", "Pipariya Hotels", "", "Pipariya");
addList("Other", "Raisen Hotels", "", "Raisen");
addList("Other", "Ratapani (Delabadi) Hotels", "", "Ratapani");
addList("Other", "Rewa Hotels", "", "Rewa");
addList("Other", "Rookhad Hotels", "", "Rookhad");
addList("Other", "Satna Hotels", "", "Satna");
addList("Other", "Sehore Hotels", "", "Sehore");
addList("Other", "Tamia Hotels", "", "Tamia");
addList("Other", "Tawa Dam Hotels", "", "Tawa");
addList("Other", "Udaygiri Hotels", "", "Udaygiri");

addOption("Highway", "Select By Place", "", 1); //HEADER OPTION
addList("Highway", "Bhimbetka Highway Treat", "", "HBhimbetka");
addList("Highway", "Midway Treat Dodi", "", "HDodi");
addList("Highway", "Highway Treat Handia", "", "HHandia");
addList("Highway", "Katni Tourist Motel", "", "HKatni");
addList("Highway", "Mandsaur Highway Treat", "", "HMandsaur");
addList("Highway", "Nowgaon Highway Treat", "", "HNowgaon");
addList("Highway", "Rookhad Highway Retreat", "", "HRookhad");

addOption("All", "Select By Place", "", 1); //HEADER OPTION
addList("All", "Amarkantak Hotels", "", "Amarkantak");
addList("All", "Bhopal Hotels", "", "Bhopal");
addList("All", "Bhojpur Hotels", "", "Bhojpur");
addList("All", "Bandhavgarh Hotels", "", "Bandhavgarh");
addList("All", "Bhedaghat Hotels", "", "Bhedaghat");
addList("All", "Bhimbetka Hotels", "", "Bhimbetka");
addList("All", "Chitrakoot Hotels", "", "Chitrakoot");
addList("All", "Chanderi Hotels", "", "Chanderi");
addList("All", "Gwalior Hotels", "", "Gwalior");
addList("All", "Hanumantiya Hotels", "", "Hanumantiya");
addList("All", "Indore Hotels", "", "Indore");
addList("All", "Jabalpur Hotels", "", "Jabalpur");
addList("All", "Kanha Hotels", "", "Kanha");
addList("All", "Khajuraho Hotels", "", "Khajuraho");
addList("All", "Orchha Hotels", "", "Orchha");
addList("All", "Omkareshwar Hotels", "", "Omkareshwar");
addList("All", "Madhai / Satpura NP Hotels", "", "Madhai");
addList("All", "Maheshwar Hotels", "", "Maheshwar");
addList("All", "Mandu Hotels", "", "Mandu");
addList("All", "Pachmarhi Hotels", "", "Pachmarhi");
addList("All", "Panna Hotels", "", "Panna");
addList("All", "Pench Hotels", "", "Pench");
addList("All", "Sailani Island", "", "Sailani");
addList("All", "Parsuli Resort", "", "Parsuli");
addList("All", "Shivpuri Hotels", "", "Shivpuri");
addList("All", "Sonagiri Hotels", "", "Sonagiri");
addList("All", "Sanchi Hotels", "", "Sanchi");
addList("All", "Ujjain Hotels", "", "Ujjain");
addList("All", "Ashoknagar Hotels", "", "Ashoknagar");
addList("All", "Balaghat Hotels", "", "Balaghat");
addList("All", "Bargi Dam Hotels", "", "Bargi");
addList("All", "Barwani Hotels", "", "Barwani");
addList("All", "Betul Hotels", "", "Betul");
addList("All", "Bhind Hotels", "", "Bhind");
addList("All", "Biaora Hotels", "", "Biaora");
addList("All", "Burhanpur Hotels", "", "Burhanpur");
addList("All", "Chhindwara Hotels", "", "Chhindwara");
addList("All", "Chhatarpur Hotels", "", "Chhatarpur");
addList("All", "Chambal Hotels", "", "Chambal");
addList("All", "Choral Hotels", "", "Choral");
addList("All", "Datia Hotels", "", "Datia");
addList("All", "Dhar Hotels", "", "Dhar");
addList("All", "Dodi Hotels", "", "Dodi");
addList("All", "Handia Hotels", "", "Handia");
addList("All", "Hoshangabad Hotels", "", "Hoshangabad");
addList("All", "Jhabua Hotels", "", "Jhabua");
addList("All", "Kuno Palpur Hotels", "", "Kuno");
addList("All", "Maihar Hotels", "", "Maihar");
addList("All", "Mandla Hotels", "", "Mandla");
addList("All", "Mandsaur Hotels", "", "Mandsaur");
addList("All", "Neemuch Hotels", "", "Neemuch");
addList("All", "Pipariya Hotels", "", "Pipariya");
addList("All", "Raisen Hotels", "", "Raisen");
addList("All", "Ratapani (Delabadi) Hotels", "", "Ratapani");
addList("All", "Rewa Hotels", "", "Rewa");
addList("All", "Satna Hotels", "", "Satna");
addList("All", "Sehore Hotels", "", "Sehore");
addList("All", "Tamia Hotels", "", "Tamia");
addList("All", "Tawa Dam Hotels", "", "Tawa");
addList("All", "Udaygiri Hotels", "", "Udaygiri");
addList("All", "Bhimbetka Highway Treat", "", "HBhimbetka");
addList("All", "Midway Treat Dodi", "", "HDodi");
addList("All", "Highway Treat Handia", "", "HHandia");
addList("All", "Katni Tourist Motel", "", "HKatni");
addList("All", "Mandsaur Highway Treat", "", "HMandsaur");
addList("All", "Nowgaon Highway Treat", "", "HNowgaon");
addList("All", "Rookhad Highway Retreat", "", "HRookhad");

addOption("Amarkantak", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Amarkantak", "Available Hotels / Resorts", "https://www.mptourandtravels.com/amarkantak/hotels/");

addOption("Bhopal", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Bhopal", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/bhopal/hotels/premium.html");
addOption("Bhopal", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/bhopal/hotels/luxury.html");
addOption("Bhopal", "City / Star Hotels", "https://www.mptourandtravels.com/bhopal/hotels/index.html");
addOption("Bhopal", "Budget Hotels", "https://www.mptourandtravels.com/bhopal/hotels/budget.html");

addOption("Bhojpur", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Bhojpur", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/bhopal/hotels/premium.html");
addOption("Bhojpur", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/bhopal/hotels/luxury.html");
addOption("Bhojpur", "City / Star Hotels", "https://www.mptourandtravels.com/bhopal/hotels/index.html");
addOption("Bhojpur", "Budget Hotels", "https://www.mptourandtravels.com/bhopal/hotels/budget.html");

addOption("Bandhavgarh", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Bandhavgarh", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/bandhavgarh/hotels/premium.html");
addOption("Bandhavgarh", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/bandhavgarh/hotels/luxury.html");
addOption("Bandhavgarh", "City / Star Hotels", "https://www.mptourandtravels.com/bandhavgarh/hotels/index.html");
addOption("Bandhavgarh", "Budget Hotels", "https://www.mptourandtravels.com/bandhavgarh/hotels/budget.html");

addOption("Bhedaghat", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Bhedaghat", "City / Star Hotels", "https://www.mptourandtravels.com/bhedaghat/hotels/index.html");

addOption("Bhimbetka", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Bhimbetka", "City / Star Hotels", "https://www.mptourandtravels.com/bhimbetka/hotels/index.html");

addOption("Chitrakoot", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Chitrakoot", "City / Star Hotels", "https://www.mptourandtravels.com/chitrakoot/hotels/index.html");

addOption("Chanderi", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Chanderi", "City / Star Hotels", "https://www.mptourandtravels.com/chanderi/hotels/index.html");

addOption("Gwalior", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Gwalior", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/gwalior/hotels/premium.html");
addOption("Gwalior", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/gwalior/hotels/luxury.html");
addOption("Gwalior", "City / Star Hotels", "https://www.mptourandtravels.com/gwalior/hotels/index.html");
addOption("Gwalior", "Budget Hotels", "https://www.mptourandtravels.com/gwalior/hotels/budget.html");

addOption("Hanumantiya", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Hanumantiya", "City / Star Hotels", "https://www.mptourandtravels.com/hanuwantiya/hotels/index.html");

addOption("Indore", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Indore", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/indore/hotels/premium.html");
addOption("Indore", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/indore/hotels/luxury.html");
addOption("Indore", "City / Star Hotels", "https://www.mptourandtravels.com/indore/hotels/index.html");
addOption("Indore", "Budget Hotels", "https://www.mptourandtravels.com/indore/hotels/budget.html");

addOption("Jabalpur", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Jabalpur", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/jabalpur/hotels/premium.html");
addOption("Jabalpur", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/jabalpur/hotels/luxury.html");
addOption("Jabalpur", "City / Star Hotels", "https://www.mptourandtravels.com/jabalpur/hotels/index.html");
addOption("Jabalpur", "Budget Hotels", "https://www.mptourandtravels.com/jabalpur/hotels/budget.html");

addOption("Kanha", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Kanha", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/kanha/hotels/premium.html");
addOption("Kanha", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/kanha/hotels/luxury.html");
addOption("Kanha", "City / Star Hotels", "https://www.mptourandtravels.com/kanha/hotels/index.html");
addOption("Kanha", "Budget Hotels", "https://www.mptourandtravels.com/kanha/hotels/budget.html");

addOption("Khajuraho", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Khajuraho", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/khajuraho/hotels/premium.html");
addOption("Khajuraho", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/khajuraho/hotels/luxury.html");
addOption("Khajuraho", "City / Star Hotels", "https://www.mptourandtravels.com/khajuraho/hotels/index.html");
addOption("Khajuraho", "Budget Hotels", "https://www.mptourandtravels.com/khajuraho/hotels/budget.html");

addOption("Orchha", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Orchha", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/orchha/hotels/premium.html");
addOption("Orchha", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/orchha/hotels/luxury.html");
addOption("Orchha", "City / Star Hotels", "https://www.mptourandtravels.com/orchha/hotels/index.html");
addOption("Orchha", "Budget Hotels", "https://www.mptourandtravels.com/orchha/hotels/budget.html");

addOption("Omkareshwar", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Omkareshwar", "City / Star Hotels", "https://www.mptourandtravels.com/omkareshwar/hotels/index.html");

addOption("Madhai", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Madhai", "City / Star Hotels", "https://www.mptourandtravels.com/madhai/hotels/index.html");

addOption("Maheshwar", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Maheshwar", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/maheshwar/hotels/premium.html");
addOption("Maheshwar", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/maheshwar/hotels/luxury.html");
addOption("Maheshwar", "City / Star Hotels", "https://www.mptourandtravels.com/maheshwar/hotels/index.html");
addOption("Maheshwar", "Budget Hotels", "https://www.mptourandtravels.com/maheshwar/hotels/budget.html");

addOption("Mandu", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Mandu", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/mandu/hotels/premium.html");
addOption("Mandu", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/mandu/hotels/luxury.html");
addOption("Mandu", "City / Star Hotels", "https://www.mptourandtravels.com/mandu/hotels/index.html");

addOption("Pachmarhi", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Pachmarhi", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/pachmarhi/hotels/premium.html");
addOption("Pachmarhi", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/pachmarhi/hotels/luxury.html");
addOption("Pachmarhi", "City / Star Hotels", "https://www.mptourandtravels.com/pachmarhi/hotels/index.html");
addOption("Pachmarhi", "Budget Hotels", "https://www.mptourandtravels.com/pachmarhi/hotels/budget.html");

addOption("Panna", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Panna", "City / Star Hotels", "https://www.mptourandtravels.com/panna/hotels/index.html");

addOption("Pench", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Pench", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/pench/hotels/premium.html");
addOption("Pench", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/pench/hotels/luxury.html");
addOption("Pench", "City / Star Hotels", "https://www.mptourandtravels.com/pench/hotels/index.html");

addOption("Parsuli", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Parsuli", "Available Hotels / Resorts", "https://www.mptourandtravels.com/hotels/index.html");

addOption("Sailani", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Sailani", "Available Hotels / Resorts", "https://www.mptourandtravels.com/hotels/index.html");

addOption("Shivpuri", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Shivpuri", "Available Hotels / Resorts", "https://www.mptourandtravels.com/shivpuri/hotels/index.html");

addOption("Sonagiri", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Sonagiri", "City / Star Hotels", "https://www.mptourandtravels.com/datia/hotels/index.html");

addOption("Sanchi", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Sanchi", "Available Hotels / Resorts", "https://www.mptourandtravels.com/sanchi/hotels/index.html");

addOption("Ujjain", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Ujjain", "Premium Hotels and Resorts", "https://www.mptourandtravels.com/ujjain/hotels/premium.html");
addOption("Ujjain", "Luxury Hotels and Resorts", "https://www.mptourandtravels.com/ujjain/hotels/luxury.html");
addOption("Ujjain", "City / Star Hotels", "https://www.mptourandtravels.com/ujjain/hotels/index.html");
addOption("Ujjain", "Budget Hotels", "https://www.mptourandtravels.com/ujjain/hotels/budget.html");

addOption("Ashoknagar", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Ashoknagar", "City / Star Hotels", "https://www.mptourandtravels.com/ashoknagar/hotels/index.html");

addOption("Balaghat", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Balaghat", "City / Star Hotels", "#");

addOption("Bargi", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Bargi", "City / Star Hotels", "https://www.mptourandtravels.com/bargi-dam/hotels/index.html");

addOption("Barwani", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Barwani", "City / Star Hotels", "#");

addOption("Betul", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Betul", "City / Star Hotels", "#");

addOption("Bhind", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Bhind", "City / Star Hotels", "#");

addOption("Biaora", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Biaora", "City / Star Hotels", "https://www.mptourandtravels.com/biaora/hotels/index.html");

addOption("Burhanpur", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Burhanpur", "City / Star Hotels", "https://www.mptourandtravels.com/burhanpur/hotels/index.html");

addOption("Chhindwara", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Chhindwara", "City / Star Hotels", "#");

addOption("Chhatarpur", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Chhatarpur", "City / Star Hotels", "#");

addOption("Chambal", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Chambal", "City / Star Hotels", "#");

addOption("Choral", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Choral", "City / Star Hotels", "http://www.mptourandtravels.com/hotels-in-choral-madhya-pradesh.php");

addOption("Datia", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Datia", "City / Star Hotels", "http://www.mptourandtravels.com/datia/hotels-in-datia-madhya-pradesh.php");

addOption("Dhar", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Dhar", "City / Star Hotels", "#");

addOption("Dodi", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Dodi", "City / Star Hotels", "http://www.mptourandtravels.com/hotels-in-dodi-madhya-pradesh.php");

addOption("Handia", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Handia", "City / Star Hotels", "http://www.mptourandtravels.com/hotels-in-handia-madhya-pradesh.php");

addOption("Hoshangabad", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Hoshangabad", "City / Star Hotels", "#");

addOption("Jhabua", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Jhabua", "City / Star Hotels", "http://www.mptourandtravels.com/jhabua/hotels/index.html");

addOption("Katni", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Katni", "City / Star Hotels", "http://www.mptourandtravels.com/katni/hotels/index.html");

addOption("Kuno", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Kuno", "City / Star Hotels", "http://www.mptourandtravels.com/hotels-in-kuno-palpur-madhya-pradesh.php");

addOption("Maihar", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Maihar", "City / Star Hotels", "http://www.mptourandtravels.com/maihar/hotels/index.html");

addOption("Mandla", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Mandla", "City / Star Hotels", "http://www.mptourandtravels.com/mandla/hotels/index.html");

addOption("Mandsaur", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Mandsaur", "City / Star Hotels", "http://www.mptourandtravels.com/mandsaur/hotels/index.html");

addOption("Nowgaon", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Nowgaon", "City / Star Hotels", "http://www.mptourandtravels.com/hotels/index.html");

addOption("Neemuch", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Neemuch", "City / Star Hotels", "http://www.mptourandtravels.com/neemuch/hotels/index.html");

addOption("Pipariya", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Pipariya", "City / Star Hotels", "http://www.mptourandtravels.com/hotels-in-pipariya-madhya-pradesh.php");

addOption("Raisen", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Raisen", "City / Star Hotels", "http://www.mptourandtravels.com/raisen/hotels/index.html");

addOption("Ratapani", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Ratapani", "City / Star Hotels", "http://www.mptourandtravels.com/delawadi/hotels/index.html");

addOption("Rewa", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Rewa", "Premium Hotels and Resorts", "http://www.mptourandtravels.com/rewa/hotels/premium.html");
addOption("Rewa", "Luxury Hotels and Resorts", "http://www.mptourandtravels.com/rewa/hotels/luxury.html");
addOption("Rewa", "City / Star Hotels", "http://www.mptourandtravels.com/rewa/hotels/index.html");
addOption("Rewa", "Budget Hotels", "http://www.mptourandtravels.com/rewa/budget-hotels-rewa-madhya-pradesh.php");

addOption("Rookhad", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Rookhad", "City / Star Hotels", "http://www.mptourandtravels.com/hotels-in-rookhad-madhya-pradesh.php");

addOption("Satna", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Satna", "City / Star Hotels", "http://www.mptourandtravels.com/satna/hotels/index.html");

addOption("Sehore", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Sehore", "City / Star Hotels", "http://www.mptourandtravels.com/sehore/hotels/index.html");

addOption("Tamia", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Tamia", "City / Star Hotels", "http://www.mptourandtravels.com/tamia/hotels/index.html");

addOption("Tawa", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Tawa", "City / Star Hotels", "http://www.mptourandtravels.com/tawa-dam/hotels/index.html");

addOption("Udaygiri", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("Udaygiri", "City / Star Hotels", "http://www.mptourandtravels.com/udaygiri/hotels/index.html");

addOption("HBhimbetka", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("HBhimbetka", "City / Star Hotels", "http://www.mptourandtravels.com/highway-amenities/hotels-in-bhimbetka-highway-madhya-pradesh.php");

addOption("HDodi", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("HDodi", "City / Star Hotels", "http://www.mptourandtravels.com/highway-amenities/hotels-in-midway-treat-madhya-pradesh.php");

addOption("HHandia", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("HHandia", "City / Star Hotels", "http://www.mptourandtravels.com/highway-amenities/hotels-in-handia-highway-madhya-pradesh.php");

addOption("HKatni", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("HKatni", "City / Star Hotels", "http://www.mptourandtravels.com/highway-amenities/hotels-in-katni-highway-madhya-pradesh.php");

addOption("HMandsaur", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("HMandsaur", "City / Star Hotels", "http://www.mptourandtravels.com/highway-amenities/hotels-in-mandsaur-highway-madhya-pradesh.php");

addOption("HNowgaon", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("HNowgaon", "City / Star Hotels", "http://www.mptourandtravels.com/highway-amenities/hotels-in-nowgaon-madhya-pradesh.php");

addOption("HRookhad", "Hotels and Resorts", "", 1); //HEADER OPTION
addOption("HRookhad", "City / Star Hotels", "http://www.mptourandtravels.com/highway-amenities/hotels-in-rookhad-madhya-pradesh.html");