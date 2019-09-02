var qidx = -1;

jQuery(document).ready(function($) {

var gtimesec = 30;

var newClock = function(timesec) {
gtimesec = timesec;
return jQuery('.clock').FlipClock(timesec, {
countdown: true,
clockFace: 'MinuteCounter',
autoStart: false,
language: "greek",
callbacks: {
interval: function() {
var time = clock.getTime().time;
if (time == 0) {
console.log('done...');
$('#endoftimedlg').modal('show');
}
}
}
})

};
var clock = newClock(gtimesec); // jQuery('.clock').FlipClock(120, {

$('#endoftimedlg').on('hidden.bs.modal', function() {
clock = newClock(gtimesec);
})

$("#inc1").click(function() {
v = parseInt($("#score1").val());
v += 1;
$("#score1").val(v);
});

$("#dec1").click(function() {
v = parseInt($("#score1").val());
v -= 1;
if (v >= 0) {
$("#score1").val(v);
}
});

$("#inc2").click(function() {
v = parseInt($("#score2").val());
v += 1;
$("#score2").val(v);
});

$("#dec2").click(function() {
v = parseInt($("#score2").val());
v -= 1;
if (v >= 0) {
$("#score2").val(v);
}
});

$("#starttimer").click(function() {
clock.start();
});

$("#stoptimer").click(function() {
clock.stop();
});


$("#reset30sec").click(function() {
// var clock = jQuery(".clock");
clock = newClock(30);
});

$("#reset3min").click(function() {
// var clock = jQuery(".clock");
clock = newClock(180);
});
});

function getQ() {
var q = '[{"question":"Πότε ιδρύθηκε το Ε.ΚΕ.Φ.Ε  «Δημόκριτος»","a1":"1. 1951","a2":"2. 1961","a3":"3. 1971","a4":"4. 1981","true":"2. 1961"},{"question":"Πόσα ερευνητικά ινστιτούτα έχει το Ε.ΚΕ.Φ.Ε «Δημόκριτος»","a1":"1. 2","a2":"2. 5","a3":"3. 10","a4":"4. 15","true":"2. 5"},{"question":"Το Ε.ΚΕ.Φ.Ε «Δημόκριτος» έφερε τον 1ο υπολογιστή στην Ελλάδα","a1":"1. Σωστό","a2":"2. Λάθος","true":"2. Λάθος"},{"question":"Το Ε.ΚΕ.Φ.Ε «Δημόκριτος» έφερε πρώτο το διαδίκτυο στην Ελλάδα","a1":"1. Σώστο","a2":"2. Λάθος","true":"1. Σώστο"},{"question":"Με ποια βασικά εργαλεία ΔΕΝ πραγματοποιείται η επικοινωνία <br/> και η μεταφορά μηνυμάτων στον εγκέφαλο;","a1":"1. Νευρώνες","a2":"2. Συνάψεις","a3":"3. Mεταγωγείς","a4":"4. Mεταφορείς","true":"3. Mεταγωγείς"},{"question":"Οι εθιστικές ουσίες μιμούνται τη δομή <br/> και τη δράση νευροδιαβιβαστών <br/> και υπερδιεγείρουν το σύστημα ανταμοιβής του εγκεφάλου.","a1":"1. Σώστο","a2":"2. Λάθος","true":"1. Σώστο"},{"question":"Σε τι διαφέρουν οι in vivo από τις in vitro διαγνωστικές μεθόδους;","a1":"1. Δίνουν πιο γρήγορα <br> αποτελέσματα","a2":"2. Δεν χρησιμοποιούν <br> ραδιενεργές ουσίες","a3":"3. Χορηγούνται με ένεση και κατανέμονται <br> σε όλο το σώμα πριν εντοπιστούν στον <br>ιστό-στόχο","a4":"4. Εντοπίζονται στον ιστό-στόχο <br> μέσω της ραδιενεργού <br>ουσίας","true":"3. Χορηγούνται με ένεση και κατανέμονται <br> σε όλο το σώμα πριν εντοπιστούν στον <br>ιστό-στόχο"},{"question":"Τι σχέση έχουν οι κληρονομικές μεταλλάξεις του DNA <br/> με την εκδήλωση μιας ασθένειας;","a1":"1. Δείχνουν προδιάθεση στην <br> συγκεκριμένη ασθένεια","a2":"2. Οι ασθένειες εκδηλώνονται <br> σε προχωρημένη ηλικία","a3":"3. Δεν έχουν καμία <br> σχέση","a4":"4. Όσοι είναι φορείς μεταλλάξεων <br> θα εκδηλώσουν την ασθένεια","true":"1. Δείχνουν προδιάθεση στην <br> συγκεκριμένη ασθένεια"},{"question":"Ποια ιδιότητα των αντισωμάτων τα κάνει κατάλληλα <br/> για εφαρμογή σε βιοδιαγνωστικές μεθόδους;","a1":"1. Η ικανότητα να δεσμεύουν <br> δύο μόρια","a2":"2. Η ικανότητα τους να συνδέονται ειδικά <br> στην ουσία που μας ενδιαφέρει","a3":"3. Το μεγάλο <br> τους μέγεθος","a4":"4. Το ότι παράγονται <br> σε ζώα","true":"2. Η ικανότητα τους να συνδέονται ειδικά <br> στην ουσία που μας ενδιαφέρει"},{"question":"Ποιο είναι το μεγαλύτερο πλεονέκτημα των αισθητήρων;","a1":"1. Δίνουν γρήγορα <br> αποτελέσματα","a2":"2. Μπορούν να μετράνε <br> πολλές ουσίες ταυτόχρονα","a3":"3. Λόγω του μικρού μεγέθους <br> μπορούν να χρησιμοποιηθούν για <br> αναλύσεις έξω από το εργαστήριο","a4":"4. Έχουν μικρό κόστος<br><br><br>","true":"3. Λόγω του μικρού μεγέθους <br> μπορούν να χρησιμοποιηθούν για <br> αναλύσεις έξω από το εργαστήριο"},{"question":"Τι είδους επιταχυντής είναι εγκατεστημένος στο Ινστιτούτο Πυρηνικής <br/> και Σωματιδιακής Φυσικής του ΕΚΕΦΕ «Δημόκριτος»;","a1":"1. Ηλεκτροστατικός επιταχυντής Van de Graaff<br> μέγιστης τάσης λειτουργίας 5.5 MV","a2":"2. Ηλεκτροστατικός επιταχυντής Van de Graaff<br> μέγιστης τάσης λειτουργίας 10.5 MV ","a3":"3. Ηλεκτροστατικός επιταχυντής Van de Graaff<br> μέγιστης τάσης λειτουργίας 45.5 MV","a4":"4. Κανένας από τους παραπάνω <br><br>","true":"1. Ηλεκτροστατικός επιταχυντής Van de Graaff<br> μέγιστης τάσης λειτουργίας 5.5 MV"},{"question":"Τι είδους σωμάτια μπορεί να επιταχύνει;","a1":"1. Επιταχύνει θετικά <br> φορτισμένα ιόντα","a2":"2. Επιταχύνει θετικά ιόντα, τα μετατρέπει σε <br> αρνητικά και εν συνεχεία επιταχύνει τα αρνητικά","a3":"3. Επιταχύνει ηλεκτρόνια<br><br>","a4":"4. Επιταχύνει αρνητικά ιόντα<br><br>","true":"1. Επιταχύνει θετικά <br> φορτισμένα ιόντα"},{"question":" Αναφέρατε το είδος των πειραμάτων που διεξάγονται στον επιταχυντή;","a1":"1. Πειράματα για την κατανόηση των ιδιοτήτων<br> του πυρήνα (π.χ. σχήμα..)","a2":"2. Πειράματα για την κατανόηση της<br> δημιουργία της ζωής","a3":"3. Χρήση του επιταχυντή για τη<br> δημιουργία ενέργειας","a4":"4. Πειράματα για τη δημιουργία<br> νέων υλικών","true":"1. Πειράματα για την κατανόηση των ιδιοτήτων<br> του πυρήνα (π.χ. σχήμα..)"}]';
return q;
}

function previous() {
var q = JSON.parse(getQ());
$("#reset30sec").click();
if (qidx > 0) {
qidx--;
}
var count = Object.keys(q[qidx]).length;
var str = "<h2>" + q[qidx]['question'] + "</h2>";
for (var i = 1; i < count - 1; i++) {
str += "<h3>" + q[qidx][Object.keys(q[qidx])[i]] + "</h3>";
}
var count = Object.keys(q[qidx]).length;
var str = "<div style=\"justify-content:center;margin:auto\"><h2>" + q[qidx]['question'] + "</h2><table style=\"width:20%;margin:auto\";><tr>";
for (var i = 1; i < count - 1; i++) {
if (i % 2 == 0) {
str += "<th><a class=\"btn btn-default\" href=\"#\" role=\"button\" id=\"ans"+i+"\" style=\"width:400px;\" name=\"ans"+i+"\" onclick=\"faultCheck(this); return false;\">" + q[qidx][Object.keys(q[qidx])[i]] + "</a></th></tr><tr>";
} else {
str += "<th><a class=\"btn btn-default\" href=\"#\" role=\"button\" id=\"ans"+i+"\" style=\"width:400px;\" name=\"ans"+i+"\" onclick=\"faultCheck(this); return false;\">" + q[qidx][Object.keys(q[qidx])[i]] + "</a></th>";
}
}
str += '</table></div>';
document.getElementById('quiz').innerHTML = str;
}

function next() {
var q = JSON.parse(getQ());
$("#reset30sec").click();
if (qidx < q.length - 1) {
qidx++;
}
var count = Object.keys(q[qidx]).length;
var str = "<div style=\"justify-content:center;margin:auto\"><h2>" + q[qidx]['question'] + "</h2><table style=\"width:20%;margin:auto\";><tr>";
for (var i = 1; i < count - 1; i++) {
if (i % 2 == 0) {
str += "<th><a class=\"btn btn-default\" href=\"#\" role=\"button\" id=\"ans"+i+"\" style=\"width:400px;\" name=\"ans"+i+"\" onclick=\"faultCheck(this); return false;\">" + q[qidx][Object.keys(q[qidx])[i]] + "</a></th></tr><tr>";
} else {
str += "<th><a class=\"btn btn-default\" href=\"#\" role=\"button\" id=\"ans"+i+"\" style=\"width:400px;\" name=\"ans"+i+"\" onclick=\"faultCheck(this); return false;\">" + q[qidx][Object.keys(q[qidx])[i]] + "</a></th>";
}
}
str += '</table></div>';
document.getElementById('quiz').innerHTML = str;
}

function qreset() {
document.getElementById('quiz').innerHTML = "";
$("#reset30sec").click();
qidx = -1;
}

function faultCheck(obj) {
var q = JSON.parse(getQ());
if (obj.innerHTML == q[qidx]['true']) {
obj.style.backgroundColor = '#00ff00';
}
else {
obj.style.backgroundColor = 'red';
}
}
