
import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  screenshots: string[];
  pageSlug: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  icon: string;
  features: string[];
  ctaText: string;
  popular: boolean;
}

interface Translations {
  el: LanguageStrings;
  en: LanguageStrings;
}

interface LanguageStrings {
  logo: string;
  navFeatures: string;
  navPricing: string;
  navLogin: string;
  navSignUp: string;
  langSwitch: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  featuresTitle: string;
  featuresSubtitle: string;
  pricingTitle: string;
  pricingSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  footerCopyright: string;
  footerPrivacy: string;
  footerTerms: string;
  footerContact: string;
  featureItems: FeatureItem[];
  pricingPlans: PricingPlan[];
  featureDetailBackButton: string;
  screenshotsTitle: string;
  screenshotsComingSoon: string;
  popularBadgeText: string;
  privacyPolicyTitle: string;
  privacyPolicyContent: string;
  termsOfServiceTitle: string;
  termsOfServiceContent: string;
  contactUsTitle: string;
  contactUsContent: string;
  contactFormComingSoon: string;
}

const translations: Translations = {
  el: {
    logo: "RH Manager v2",
    navFeatures: "Χαρακτηριστικά",
    navPricing: "Τιμοκατάλογος",
    navLogin: "Σύνδεση",
    navSignUp: "Εγγραφή",
    langSwitch: "EN",
    heroTitle: "Βελτιστοποιήστε τη Λειτουργία της Σχολής Χορού σας",
    heroSubtitle: "Το RH Manager v2 είναι η ολοκληρωμένη πλατφόρμα για εύκολη διαχείριση προγραμμάτων, μαθητών, πληρωμών και προσωπικού. Επικεντρωθείτε στον χορό, εμείς αναλαμβάνουμε τα υπόλοιπα.",
    heroCTA: "Ξεκινήστε Δωρεάν",
    featuresTitle: "Γιατί να επιλέξετε το RH Manager v2;",
    featuresSubtitle: "Ανακαλύψτε τις ισχυρές λειτουργίες που έχουν σχεδιαστεί για να κάνουν τη διαχείριση της σχολής χορού σας απλούστερη και πιο αποτελεσματική από ποτέ.",
    pricingTitle: "Ευέλικτα Πακέτα για Κάθε Σχολή Χορού",
    pricingSubtitle: "Επιλέξτε το ιδανικό πακέτο που ταιριάζει στο μέγεθος και τις ανάγκες της σχολής σας. Όλα τα πακέτα περιλαμβάνουν δωρεάν δοκιμή 14 ημερών.",
    ctaTitle: "Είστε έτοιμοι να αναβαθμίσετε τη σχολή χορού σας;",
    ctaSubtitle: "Γίνετε μέλος των εκατοντάδων σχολών χορού που ήδη ευδοκιμούν με το RH Manager v2. Ξεκινήστε τη δωρεάν δοκιμή σας σήμερα και δείτε τη διαφορά.",
    ctaButton: "Ξεκινήστε τη Δωρεάν Δοκιμή σας",
    footerCopyright: `© ${new Date().getFullYear()} RH Manager v2. Με επιφύλαξη παντός δικαιώματος.`,
    footerPrivacy: "Πολιτική Απορρήτου",
    footerTerms: "Όροι Χρήσης",
    footerContact: "Επικοινωνία",
    featureDetailBackButton: "Επιστροφή στα Χαρακτηριστικά",
    screenshotsTitle: "Στιγμιότυπα Οθόνης",
    screenshotsComingSoon: "Τα στιγμιότυπα οθόνης θα προστεθούν σύντομα!",
    popularBadgeText: "Πιο Δημοφιλές",
    featureItems: [
      {
        icon: "fa-solid fa-users-gear",
        title: "Ολοκληρωμένη Διαχείριση Χρηστών",
        description: "Ασφαλής εγγραφή και σύνδεση χρηστών, διαχείριση ρόλων (προσωπικό, μαθητές, διαχειριστές) και προφίλ χρηστών.",
        longDescription: "Αυτή η ενότητα επιτρέπει την πλήρη διαχείριση των χρηστών του συστήματος. Περιλαμβάνει ασφαλείς μεθόδους εγγραφής με επαλήθευση email, διαδικασίες ανάκτησης κωδικού πρόσβασης, και τη δυνατότητα δημιουργίας και ανάθεσης προσαρμοσμένων ρόλων όπως διαχειριστής, προσωπικό σχολής, μαθητής, κ.λπ. Κάθε χρήστης μπορεί να διαχειρίζεται το προσωπικό του προφίλ, ενημερώνοντας τα στοιχεία του και τις προτιμήσεις του. Τα δικαιώματα πρόσβασης είναι αυστηρά καθορισμένα ανά ρόλο και μπορούν να περιοριστούν περαιτέρω σε επίπεδο εταιρείας ή υποκαταστήματος, διασφαλίζοντας την ασφάλεια και την ιδιωτικότητα των δεδομένων.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Προβολή+Πίνακα+Ελέγχου+Χρήστη", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Οθόνη+Διαχείρισης+Ρόλων" ],
        pageSlug: "user-management"
      },
      {
        icon: "fa-solid fa-building-user",
        title: "Διαχείριση Σχολής & Υποκαταστημάτων",
        description: "Υποστήριξη πολλαπλών εταιρειών/σχολών και εύκολη εναλλαγή μεταξύ υποκαταστημάτων με διαβαθμισμένα δικαιώματα.",
        longDescription: "Διαχειριστείτε αποτελεσματικά μία ή περισσότερες σχολές χορού από ένα κεντρικό σημείο. Το σύστημα επιτρέπει τη δημιουργία πολλαπλών εταιρειών και υποκαταστημάτων, με δυνατότητα εύκολης εναλλαγής του πλαισίου εργασίας για το προσωπικό. Τα δικαιώματα και η πρόσβαση στα δεδομένα προσαρμόζονται αυτόματα ανάλογα με το επιλεγμένο υποκατάστημα, εξασφαλίζοντας ότι κάθε χρήστης βλέπει μόνο τις πληροφορίες που τον αφορούν.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Διαχείριση+Πολλαπλών+Σχολών", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Εναλλαγή+Υποκαταστήματος" ],
        pageSlug: "school-branch-management"
      },
      {
        icon: "fa-solid fa-users-cog",
        title: "Ευέλικτη Διαχείριση Προσωπικού",
        description: "Δημιουργία, επεξεργασία και ανάθεση ρόλων στο προσωπικό ανά εταιρεία/υποκατάστημα, με κατάλογο προσωπικού.",
        longDescription: "Οργανώστε το προσωπικό σας με ευκολία. Δημιουργήστε λογαριασμούς για τους εκπαιδευτές και το διοικητικό προσωπικό, αναθέστε τους συγκεκριμένους ρόλους και δικαιώματα ανάλογα με τις αρμοδιότητές τους σε κάθε σχολή ή υποκατάστημα. Διατηρήστε έναν ενημερωμένο κατάλογο προσωπικού με δυνατότητες αναζήτησης και φιλτραρίσματος.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Λίστα+Προσωπικού", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Ανάθεση+Ρόλου+Προσωπικού" ],
        pageSlug: "staff-management"
      },
      {
        icon: "fa-solid fa-user-graduate",
        title: "Διαχείριση Κύκλου Ζωής Μαθητών",
        description: "Πλήρης παρακολούθηση μαθητών: από την εγγραφή και την παρακολούθηση προόδου έως την ανάθεση σε τμήματα και επίπεδα.",
        longDescription: "Παρακολουθήστε κάθε πτυχή της πορείας ενός μαθητή στη σχολή σας. Από την αρχική εγγραφή, την ανάθεση σε συγκεκριμένα μαθήματα και επίπεδα, μέχρι την παρακολούθηση της προόδου και των παρουσιών. Το σύστημα επιτρέπει την εύκολη ενημέρωση των στοιχείων των μαθητών και την τήρηση ενός πλήρους ιστορικού.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Προφίλ+Μαθητή", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Παρακολούθηση+Προόδου" ],
        pageSlug: "student-lifecycle-management"
      },
      {
        icon: "fa-solid fa-calendar-alt",
        title: "Διαχείριση Μαθημάτων & Προγράμματος",
        description: "Δημιουργία καταλόγου μαθημάτων, ανάθεση μαθητών σε επίπεδα και ευέλικτος προγραμματισμός τμημάτων και εκδηλώσεων.",
        longDescription: "Δημιουργήστε έναν αναλυτικό κατάλογο των μαθημάτων που προσφέρετε, καθορίστε διαφορετικά επίπεδα για κάθε μάθημα και αναθέστε μαθητές ανάλογα. Το ευέλικτο σύστημα προγραμματισμού σας επιτρέπει να οργανώνετε εύκολα τα ωρολόγια προγράμματα των τμημάτων, των μεμονωμένων μαθημάτων, καθώς και ειδικών εκδηλώσεων ή σεμιναρίων.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Κατάλογος+Μαθημάτων", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Εβδομαδιαίο+Πρόγραμμα" ],
        pageSlug: "course-schedule-management"
      },
      {
        icon: "fa-solid fa-wallet",
        title: "Πληρωμές, Τιμολόγηση & POS",
        description: "Παρακολούθηση πληρωμών, δημιουργία τιμολογίων, αυτόματη αποστολή στην πλατφόρμα myDATA (ΑΑΔΕ) και ολοκληρωμένη υποστήριξη πληρωμών POS με Viva Wallet.",
        longDescription: "Απλοποιήστε τις οικονομικές σας συναλλαγές. Παρακολουθήστε τις πληρωμές διδάκτρων και άλλων υπηρεσιών, δημιουργήστε και διαχειριστείτε τιμολόγια με ευκολία. Το σύστημα είναι πλήρως εναρμονισμένο με την ελληνική νομοθεσία, υποστηρίζοντας την αυτόματη ηλεκτρονική αποστολή δεδομένων στην πλατφόρμα myDATA της ΑΑΔΕ. Επιπλέον, προσφέρει ολοκληρωμένη ενσωμάτωση με τερματικά POS της Viva Wallet για άμεσες και ασφαλείς συναλλαγές με κάρτα.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Οθόνη+Διαχείρισης+Πληρωμών", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Ρυθμίσεις+myDATA+&+Viva+POS" ],
        pageSlug: "payments-invoicing-pos"
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Πίνακες Ελέγχου & Αναφορές",
        description: "Εξατομικευμένοι πίνακες ελέγχου με βασικές μετρήσεις, στατιστικά και οπτικοποιημένα δεδομένα για την απόδοση της σχολής.",
        longDescription: "Αποκτήστε πολύτιμες πληροφορίες για την απόδοση της σχολής σας μέσω εξατομικευμένων πινάκων ελέγχου (dashboards). Δείτε με μια ματιά βασικές μετρήσεις, όπως αριθμό ενεργών μαθητών, έσοδα, παρακολούθηση πληρωμών, και άλλα στατιστικά στοιχεία. Δημιουργήστε αναφορές και οπτικοποιήστε δεδομένα για να λαμβάνετε τεκμηριωμένες αποφάσεις.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Κύριο+Dashboard", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Δείγμα+Αναφοράς" ],
        pageSlug: "dashboards-reporting"
      },
      {
        icon: "fa-solid fa-cogs",
        title: "Εργαλεία Διαχείρισης & Σύγχρονο UI/UX",
        description: "Βελτιωμένος πίνακας διαχείρισης, φόρμες σε modal, πλευρική μπάρα πλοήγησης και responsive σχεδιασμός για άριστη εμπειρία χρήστη.",
        longDescription: "Το RH Manager v2 διαθέτει έναν ισχυρό και βελτιωμένο πίνακα διαχείρισης (admin panel) που απλοποιεί τις καθημερινές εργασίες. Οι περισσότερες ενέργειες δημιουργίας, επεξεργασίας και διαγραφής πραγματοποιούνται μέσω modal παραθύρων για μια ομαλή ροή εργασίας χωρίς αλλαγές σελίδας. Η πλοήγηση γίνεται εύκολη μέσω μιας έξυπνης πλευρικής μπάρας, ενώ ο responsive σχεδιασμός εξασφαλίζει άριστη εμπειρία χρήστη σε όλες τις συσκευές (desktop, tablet, κινητά).",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Admin+Panel+Interface", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Παράδειγμα+Modal+Form" ],
        pageSlug: "admin-ui-ux"
      }
    ],
    pricingPlans: [
      { name: "Starter Studio", price: "€29", period: "/μήνα", icon: "fa-solid fa-school", features: [ "Έως 50 Μαθητές", "Έως 3 Λογαριασμοί Προσωπικού", "Βασικός Προγραμματισμός", "Εγγραφή Μαθητών", "Βασική Παρακολούθηση Πληρωμών", "Υποστήριξη μέσω Email", ], ctaText: "Ξεκινήστε", popular: false, },
      { name: "Growth Academy", price: "€79", period: "/μήνα", icon: "fa-solid fa-graduation-cap", features: [ "Έως 200 Μαθητές", "Έως 10 Λογαριασμοί Προσωπικού", "Προηγμένος Προγραμματισμός", "Πλήρης Διαχείριση Μαθητών", "Δημιουργία & Επεξεργασία Τιμολογίων", "Σύνδεση myDATA (ΑΑΔΕ)", "Πληρωμές POS (Viva Wallet)", "Ρόλοι & Δικαιώματα Χρηστών", "Υποστήριξη Email κατά Προτεραιότητα", ], ctaText: "Επιλέξτε Πακέτο", popular: true, },
      { name: "Pro Enterprise", price: "€149", period: "/μήνα", icon: "fa-solid fa-rocket", features: [ "Απεριόριστοι Μαθητές", "Απεριόριστοι Λογαριασμοί Προσωπικού", "Διαχείριση Πολλαπλών Υποκαταστημάτων", "Προηγμένες Αναφορές & Analytics", "Σύνδεση myDATA (ΑΑΔΕ)", "Πληρωμές POS (Viva Wallet)", "Μαζική Εισαγωγή/Εξαγωγή Δεδομένων", "Αποκλειστική Υποστήριξη", ], ctaText: "Επιλέξτε Πακέτο", popular: false, },
    ],
    privacyPolicyTitle: "Πολιτική Απορρήτου",
    privacyPolicyContent: `
      <h3>1. Εισαγωγή</h3>
      <p>Η Πολιτική Απορρήτου περιγράφει πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις προσωπικές σας πληροφορίες. Χρησιμοποιώντας τις υπηρεσίες μας, συμφωνείτε με τους όρους αυτής της πολιτικής.</p>
      <h3>2. Πληροφορίες που Συλλέγουμε</h3>
      <p>Συλλέγουμε πληροφορίες που παρέχετε κατά την εγγραφή, όπως όνομα, email, και στοιχεία πληρωμής. Επίσης, συλλέγουμε δεδομένα χρήσης για τη βελτίωση των υπηρεσιών μας.</p>
      <h3>3. Πώς Χρησιμοποιούμε τις Πληροφορίες</h3>
      <p>Οι πληροφορίες σας χρησιμοποιούνται για την παροχή και βελτίωση των υπηρεσιών, την επικοινωνία μαζί σας και την τήρηση νομικών υποχρεώσεων.</p>
      <p><em>Τελευταία ενημέρωση: [Ημερομηνία]</em></p>
    `,
    termsOfServiceTitle: "Όροι Χρήσης",
    termsOfServiceContent: `
      <h3>1. Αποδοχή των Όρων</h3>
      <p>Με την πρόσβαση και χρήση της πλατφόρμας RH Manager v2, αποδέχεστε πλήρως και ανεπιφύλακτα τους παρόντες Όρους Χρήσης.</p>
      <h3>2. Χρήση της Υπηρεσίας</h3>
      <p>Η υπηρεσία παρέχεται για τη διαχείριση σχολών χορού. Απαγορεύεται η χρήση για παράνομους σκοπούς ή κατά τρόπο που μπορεί να βλάψει την υπηρεσία ή τρίτους.</p>
      <h3>3. Πνευματική Ιδιοκτησία</h3>
      <p>Το περιεχόμενο και το λογισμικό της πλατφόρμας αποτελούν πνευματική ιδιοκτησία του RH Manager v2.</p>
      <p><em>Τελευταία ενημέρωση: [Ημερομηνία]</em></p>
    `,
    contactUsTitle: "Επικοινωνία",
    contactUsContent: `
      <p>Εάν έχετε ερωτήσεις ή χρειάζεστε υποστήριξη, μη διστάσετε να επικοινωνήσετε μαζί μας.</p>
      <p><strong>Email:</strong> support@rhmanager.example.com</p>
      <p><strong>Τηλέφωνο:</strong> +30 210 1234567</p>
      <p><strong>Διεύθυνση:</strong> Οδός Παραδείγματος 123, Αθήνα, Ελλάδα</p>
    `,
    contactFormComingSoon: "Η φόρμα επικοινωνίας θα είναι διαθέσιμη σύντομα.",
  },
  en: {
    logo: "RH Manager v2",
    navFeatures: "Features",
    navPricing: "Pricing",
    navLogin: "Login",
    navSignUp: "Sign Up",
    langSwitch: "ΕΛ",
    heroTitle: "Streamline Your Dance School Operations",
    heroSubtitle: "RH Manager v2 is your all-in-one platform to manage schedules, students, payments, and staff, effortlessly. Focus on dance, we'll handle the rest.",
    heroCTA: "Get Started Free",
    featuresTitle: "Why Choose RH Manager v2?",
    featuresSubtitle: "Discover the powerful features designed to make managing your dance school simpler and more efficient than ever before.",
    pricingTitle: "Flexible Plans for Every Dance School",
    pricingSubtitle: "Choose the perfect plan that fits your school's size and needs. All plans come with a 14-day free trial.",
    ctaTitle: "Ready to Elevate Your Dance School?",
    ctaSubtitle: "Join hundreds of dance schools already thriving with RH Manager v2. Start your free trial today and experience the difference.",
    ctaButton: "Start Your Free Trial",
    footerCopyright: `© ${new Date().getFullYear()} RH Manager v2. All Rights Reserved.`,
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerContact: "Contact Us",
    featureDetailBackButton: "Back to Features",
    screenshotsTitle: "Screenshots",
    screenshotsComingSoon: "Screenshots coming soon!",
    popularBadgeText: "Most Popular",
    featureItems: [
      {
        icon: "fa-solid fa-users-gear",
        title: "Comprehensive User Management",
        description: "Secure user registration and login, role management (staff, students, admins), and user profiles.",
        longDescription: "This module allows for complete management of system users. It includes secure registration methods with email verification, password recovery processes, and the ability to create and assign custom roles such as administrator, school staff, student, etc. Each user can manage their personal profile, updating their details and preferences. Access rights are strictly defined per role and can be further scoped at the company or branch level, ensuring data security and privacy.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=User+Dashboard+View", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Role+Management+Screen" ],
        pageSlug: "user-management"
      },
      {
        icon: "fa-solid fa-building-user",
        title: "School & Branch Management",
        description: "Support for multiple companies/schools and easy switching between branches with scoped permissions.",
        longDescription: "Efficiently manage one or more dance schools from a central hub. The system supports multiple companies and branches, with easy context switching for staff. Permissions and data access are automatically adjusted based on the selected branch, ensuring users only see relevant information.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Multi-School+Management", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Branch+Switching+UI" ],
        pageSlug: "school-branch-management"
      },
      {
        icon: "fa-solid fa-users-cog",
        title: "Flexible Staff Management",
        description: "Create, edit, and assign roles to staff per company/branch, with a staff directory.",
        longDescription: "Organize your staff with ease. Create accounts for instructors and administrative personnel, assign them specific roles and permissions based on their responsibilities in each school or branch. Maintain an updated staff directory with search and filtering capabilities.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Staff+List+View", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Staff+Role+Assignment" ],
        pageSlug: "staff-management"
      },
      {
        icon: "fa-solid fa-user-graduate",
        title: "Student Lifecycle Management",
        description: "Full student tracking: from enrollment and progress monitoring to assignment to classes and levels.",
        longDescription: "Track every aspect of a student's journey at your school. From initial enrollment, assignment to specific courses and levels, to monitoring progress and attendance. The system allows for easy updating of student information and maintains a complete history.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Student+Profile+Page", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Progress+Tracking+Chart" ],
        pageSlug: "student-lifecycle-management"
      },
      {
        icon: "fa-solid fa-calendar-alt",
        title: "Course & Schedule Management",
        description: "Create course catalogs, assign students to levels, and flexibly schedule classes and events.",
        longDescription: "Develop a detailed catalog of the courses you offer, define different levels for each course, and assign students accordingly. The flexible scheduling system allows you to easily organize class timetables, individual lessons, and special events or workshops.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Course+Catalog", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Weekly+Schedule+View" ],
        pageSlug: "course-schedule-management"
      },
      {
        icon: "fa-solid fa-wallet",
        title: "Payments, Invoicing & POS",
        description: "Track payments, generate invoices, automatic submission to myDATA platform (Greek IRA), and full Viva Wallet POS integration.",
        longDescription: "Simplify your financial transactions. Track tuition payments and other services, generate and manage invoices with ease. The system is fully compliant with Greek regulations, supporting automatic electronic data submission to the AADE's myDATA platform. Additionally, it offers seamless integration with Viva Wallet POS terminals for direct and secure card transactions.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Payment+Management+Screen", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=myDATA+&+Viva+POS+Settings" ],
        pageSlug: "payments-invoicing-pos"
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Dashboards & Reporting",
        description: "Personalized dashboards with key metrics, statistics, and visualized data on school performance.",
        longDescription: "Gain valuable insights into your school's performance through personalized dashboards. See key metrics at a glance, such as active student counts, revenue, payment tracking, and other statistics. Generate reports and visualize data to make informed decisions.",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Main+Dashboard+Overview", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Sample+Report+View" ],
        pageSlug: "dashboards-reporting"
      },
      {
        icon: "fa-solid fa-cogs",
        title: "Admin Utilities & Modern UI/UX",
        description: "Enhanced admin panel, modal forms, sidebar navigation, and responsive design for an excellent user experience.",
        longDescription: "RH Manager v2 features a powerful and enhanced admin panel that simplifies daily tasks. Most create, edit, and delete actions are performed via modal windows for a smooth workflow without page reloads. Navigation is made easy with an intelligent sidebar, and responsive design ensures an excellent user experience across all devices (desktop, tablet, mobile).",
        screenshots: [ "https://via.placeholder.com/450x350/6D28D9/FFFFFF?text=Admin+Panel+Interface", "https://via.placeholder.com/450x350/EC4899/FFFFFF?text=Modal+Form+Example" ],
        pageSlug: "admin-ui-ux"
      }
    ],
    pricingPlans: [
      { name: "Starter Studio", price: "€29", period: "/month", icon: "fa-solid fa-school", features: [ "Up to 50 Students", "Up to 3 Staff Accounts", "Core Scheduling", "Student Enrollment", "Basic Payment Tracking", "Email Support", ], ctaText: "Get Started", popular: false, },
      { name: "Growth Academy", price: "€79", period: "/month", icon: "fa-solid fa-graduation-cap", features: [ "Up to 200 Students", "Up to 10 Staff Accounts", "Advanced Scheduling", "Full Student Lifecycle Management", "Invoice Generation & Processing", "myDATA Integration (Greek IRA)", "POS Payments (Viva Wallet)", "User Roles & Permissions", "Priority Email Support", ], ctaText: "Choose Plan", popular: true, },
      { name: "Pro Enterprise", price: "€149", period: "/month", icon: "fa-solid fa-rocket", features: [ "Unlimited Students", "Unlimited Staff Accounts", "Multi-Branch Management", "Advanced Reporting & Analytics", "myDATA Integration (Greek IRA)", "POS Payments (Viva Wallet)", "Bulk Data Import/Export", "Dedicated Support", ], ctaText: "Choose Plan", popular: false, },
    ],
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicyContent: `
      <h3>1. Introduction</h3>
      <p>This Privacy Policy describes how we collect, use, and protect your personal information. By using our services, you agree to the terms of this policy.</p>
      <h3>2. Information We Collect</h3>
      <p>We collect information you provide during registration, such as name, email, and payment details. We also collect usage data to improve our services.</p>
      <h3>3. How We Use Information</h3>
      <p>Your information is used to provide and improve services, communicate with you, and comply with legal obligations.</p>
      <p><em>Last updated: [Date]</em></p>
    `,
    termsOfServiceTitle: "Terms of Service",
    termsOfServiceContent: `
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing and using the RH Manager v2 platform, you accept and agree to be bound by these Terms of Service.</p>
      <h3>2. Use of Service</h3>
      <p>The service is provided for dance school management. Use for illegal purposes or in a manner that could harm the service or third parties is prohibited.</p>
      <h3>3. Intellectual Property</h3>
      <p>The content and software on the platform are the intellectual property of RH Manager v2.</p>
      <p><em>Last updated: [Date]</em></p>
    `,
    contactUsTitle: "Contact Us",
    contactUsContent: `
      <p>If you have questions or need support, please don't hesitate to contact us.</p>
      <p><strong>Email:</strong> support@rhmanager.example.com</p>
      <p><strong>Phone:</strong> +30 210 1234567</p>
      <p><strong>Address:</strong> Example Street 123, Athens, Greece</p>
    `,
    contactFormComingSoon: "Contact form will be available soon.",
  }
};

// Inline styles for components
const styles: { [key: string]: React.CSSProperties } = {
    header: {
      backgroundColor: 'var(--bg-light)',
      padding: '15px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: 'var(--primary-color)',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    navLinks: { // Base styles for UL, primarily for desktop
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      padding: 0,
    },
    navLinkItem: {
      marginLeft: '20px',
    },
    navLink: { 
      textDecoration: 'none',
      color: 'var(--text-medium)',
      fontWeight: 600,
      transition: 'color 0.3s ease, border-bottom-color 0.3s ease',
      padding: '5px 0',
      borderBottom: '2px solid transparent',
      fontSize: '0.95rem',
      cursor: 'pointer',
    },
    langButton: {
        background: 'transparent',
        border: '1px solid var(--primary-color)',
        color: 'var(--primary-color)',
        padding: '6px 12px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 600,
        marginLeft: '20px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    hero: {
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-light)',
      padding: '100px 0',
      textAlign: 'center',
      minHeight: 'calc(80vh - 70px)', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heroTitle: {
      fontSize: '3.2rem',
      marginBottom: '20px',
      color: 'var(--text-light)',
      maxWidth: '850px',
      lineHeight: 1.3,
      margin: '0 auto 20px auto', // Centering
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '35px',
      maxWidth: '750px',
      opacity: 0.9,
      lineHeight: 1.8,
      margin: '0 auto 35px auto', // Centering
    },
    featuresSection: {
      padding: '80px 0',
      backgroundColor: 'var(--bg-light)',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    featureCard: { 
      backgroundColor: 'var(--bg-light)',
      padding: '30px',
      borderRadius: '12px',
      textAlign: 'left',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid #e5e7eb',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    featureIconContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
    },
    featureIcon: {
      fontSize: '2rem',
      color: 'var(--primary-color)',
      marginRight: '15px',
      width: '40px',
      textAlign: 'center',
    },
    featureTitle: {
      fontSize: '1.3rem',
      color: 'var(--text-dark)',
      fontWeight: 600,
    },
    featureDescription: {
      fontSize: '0.95rem',
      color: 'var(--text-medium)',
      lineHeight: 1.6,
      flexGrow: 1,
    },
    pricingSection: {
      padding: '80px 0',
      backgroundColor: 'var(--bg-medium)',
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      marginTop: '50px',
      alignItems: 'stretch', 
    },
    pricingCard: { 
      backgroundColor: 'var(--bg-light)',
      padding: '35px',
      borderRadius: '12px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.07)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '1px solid #e5e7eb'
    },
    pricingCardPopular: { 
        border: '3px solid var(--primary-color)',
        transform: 'scale(1.03)', 
        position: 'relative', 
    },
    popularBadge: {
        position: 'absolute',
        top: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-light)',
        padding: '5px 15px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: 600,
    },
    pricingIcon: {
      fontSize: '3rem',
      color: 'var(--secondary-color)',
      marginBottom: '15px',
    },
    pricingName: {
      fontSize: '1.6rem',
      color: 'var(--text-dark)',
      fontWeight: 600,
      marginBottom: '10px',
    },
    pricingPrice: {
      fontSize: '2.8rem',
      color: 'var(--primary-color)',
      fontWeight: 700,
      margin: '10px 0',
    },
    pricingPeriod: {
      fontSize: '1rem',
      color: 'var(--text-medium)',
      marginLeft: '5px',
    },
    pricingFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: '25px 0',
      textAlign: 'left',
      flexGrow: 1,
    },
    pricingFeatureItem: {
      marginBottom: '12px',
      color: 'var(--text-medium)',
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.95rem',
    },
    pricingFeatureIcon: {
      color: 'var(--accent-color)', 
      marginRight: '10px',
      fontSize: '1.1rem',
    },
    ctaSection: {
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-light)',
        padding: '80px 0',
        textAlign: 'center',
    },
    ctaTitle: {
        fontSize: '2.5rem',
        color: 'var(--text-light)',
        marginBottom: '20px',
    },
    ctaSubtitle: {
        fontSize: '1.2rem',
        opacity: 0.9,
        maxWidth: '600px',
        margin: '0 auto 30px auto',
    },
    footer: {
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-light)',
      padding: '40px 0',
      textAlign: 'center',
      fontSize: '0.9rem',
    },
    footerLinks: {
        listStyle: 'none',
        padding: 0,
        margin: '10px 0 0 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
    },
    footerLink: {
        color: 'var(--text-light)',
        textDecoration: 'none',
        opacity: 0.8,
        transition: 'opacity 0.3s ease',
        cursor: 'pointer',
    },
    featureDetailSection: {
        padding: '60px 0',
        backgroundColor: 'var(--bg-light)',
        minHeight: 'calc(100vh - 70px - 130px)', 
    },
    backButton: {
        marginBottom: '30px',
        fontSize: '1rem',
        display: 'inline-flex',
        alignItems: 'center',
    },
    featureDetailHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '20px',
    },
    featureDetailIcon: {
        fontSize: '2.5rem',
        color: 'var(--primary-color)',
        marginRight: '20px',
    },
    featureDetailTitle: {
        fontSize: '2.5rem',
        color: 'var(--text-dark)',
        fontWeight: 700,
    },
    featureDetailDescription: {
        fontSize: '1.1rem',
        color: 'var(--text-medium)',
        lineHeight: 1.8,
        marginBottom: '40px',
        whiteSpace: 'pre-line', 
    },
    screenshotsTitle: {
        fontSize: '1.8rem',
        color: 'var(--text-dark)',
        marginBottom: '20px',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '30px',
    },
    screenshotsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
    },
    screenshotImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        border: '1px solid #ddd',
    },
    staticPageSection: {
        padding: '60px 0',
        backgroundColor: 'var(--bg-light)',
        minHeight: 'calc(100vh - 70px - 130px)', // Header + Footer approx
    },
    staticPageTitle: {
        fontSize: '2.5rem',
        color: 'var(--text-dark)',
        fontWeight: 700,
        marginBottom: '30px',
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '20px',
    },
    staticPageContent: {
        fontSize: '1rem',
        color: 'var(--text-medium)',
        lineHeight: 1.8,
    },
    staticPageContentSection: {
        marginBottom: '20px',
    }
  };

// Header Component
const HeaderComponent: React.FC<{
    T: LanguageStrings;
    currentLanguage: string;
    toggleLanguage: () => void;
    onLogoClick: () => void;
    onNavLinkClick: (target: string) => void;
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}> = ({ T, currentLanguage, toggleLanguage, onLogoClick, onNavLinkClick, isMobileMenuOpen, toggleMobileMenu }) => (
    <header style={styles.header} role="banner">
        <div className="container" style={styles.nav}>
        <a onClick={onLogoClick} style={styles.logo} aria-label="RH Manager v2 Home">{T.logo}</a>
        <nav aria-label="Main navigation">
            <ul 
                style={styles.navLinks} 
                className={`main-nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
                id="main-nav-links"
            >
                <li style={styles.navLinkItem}><a onClick={() => onNavLinkClick('#features')} style={styles.navLink} className="nav-link-hover">{T.navFeatures}</a></li>
                <li style={styles.navLinkItem}><a onClick={() => onNavLinkClick('#pricing')} style={styles.navLink} className="nav-link-hover">{T.navPricing}</a></li>
                <li style={styles.navLinkItem}><a href="#" className="btn btn-outline" style={{ padding: '8px 18px', fontSize: '0.9rem'}}>{T.navLogin}</a></li>
                <li style={styles.navLinkItem}><a href="#" className="btn btn-secondary" style={{ padding: '8px 18px', color: 'var(--text-light)', fontSize: '0.9rem'}}>{T.navSignUp}</a></li>
                <li style={styles.navLinkItem}>
                    <button 
                        onClick={toggleLanguage} 
                        style={styles.langButton} 
                        className="lang-button-hover"
                        aria-label={currentLanguage === 'el' ? 'Switch to English' : 'Switch to Greek'}
                    >
                        {T.langSwitch}
                    </button>
                </li>
            </ul>
            <button 
                className="mobile-nav-toggle" 
                aria-controls="main-nav-links" 
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
            >
                <span className="sr-only">Menu</span>
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} style={{color: 'var(--primary-color)', fontSize: '1.5rem'}}></i>
            </button>
        </nav>
        </div>
    </header>
);

// Footer Component
const FooterComponent: React.FC<{
    T: LanguageStrings;
    onFooterLinkClick: (page: 'privacy' | 'terms' | 'contact') => void;
}> = ({T, onFooterLinkClick}) => (
    <footer style={styles.footer} role="contentinfo">
        <div className="container">
        <p>{T.footerCopyright}</p>
        <ul style={styles.footerLinks}>
            <li><a onClick={() => onFooterLinkClick('privacy')} style={styles.footerLink} className="footer-link-hover">{T.footerPrivacy}</a></li>
            <li><a onClick={() => onFooterLinkClick('terms')} style={styles.footerLink} className="footer-link-hover">{T.footerTerms}</a></li>
            <li><a onClick={() => onFooterLinkClick('contact')} style={styles.footerLink} className="footer-link-hover">{T.footerContact}</a></li>
        </ul>
        </div>
    </footer>
);

// Feature Detail Page Component
const FeatureDetailPage: React.FC<{
    feature: FeatureItem;
    onBack: () => void;
    T_detail: LanguageStrings; 
}> = ({ feature, onBack, T_detail }) => {
    return (
        <section style={styles.featureDetailSection} aria-labelledby={`feature-title-${feature.pageSlug}`}>
        <div className="container">
            <button onClick={onBack} style={styles.backButton} className="btn btn-outline">
            &larr; {T_detail.featureDetailBackButton}
            </button>
            <div style={styles.featureDetailHeader}>
            <i className={feature.icon} style={styles.featureDetailIcon} aria-hidden="true"></i>
            <h1 id={`feature-title-${feature.pageSlug}`} style={styles.featureDetailTitle}>{feature.title}</h1>
            </div>
            <p style={styles.featureDetailDescription}>{feature.longDescription}</p>
            
            <h2 style={styles.screenshotsTitle}>{T_detail.screenshotsTitle}</h2>
            {feature.screenshots && feature.screenshots.length > 0 ? (
            <div style={styles.screenshotsGrid}>
                {feature.screenshots.map((src, idx) => (
                <img 
                    key={idx} 
                    src={src} 
                    alt={`${feature.title} screenshot ${idx + 1}`} 
                    style={styles.screenshotImage} 
                    loading="lazy"
                />
                ))}
            </div>
            ) : (
            <p>{T_detail.screenshotsComingSoon}</p>
            )}
        </div>
        </section>
    );
};

// Static Page Components
const PrivacyPolicyPage: React.FC<{ T_static: LanguageStrings }> = ({ T_static }) => (
    <section style={styles.staticPageSection} aria-labelledby="privacy-policy-title">
        <div className="container">
            <h1 id="privacy-policy-title" style={styles.staticPageTitle}>{T_static.privacyPolicyTitle}</h1>
            <div style={styles.staticPageContent} dangerouslySetInnerHTML={{ __html: T_static.privacyPolicyContent }} />
        </div>
    </section>
);

const TermsOfServicePage: React.FC<{ T_static: LanguageStrings }> = ({ T_static }) => (
    <section style={styles.staticPageSection} aria-labelledby="terms-of-service-title">
        <div className="container">
            <h1 id="terms-of-service-title" style={styles.staticPageTitle}>{T_static.termsOfServiceTitle}</h1>
            <div style={styles.staticPageContent} dangerouslySetInnerHTML={{ __html: T_static.termsOfServiceContent }} />
        </div>
    </section>
);

const ContactPage: React.FC<{ T_static: LanguageStrings }> = ({ T_static }) => (
    <section style={styles.staticPageSection} aria-labelledby="contact-us-title">
        <div className="container">
            <h1 id="contact-us-title" style={styles.staticPageTitle}>{T_static.contactUsTitle}</h1>
            <div style={styles.staticPageContent} dangerouslySetInnerHTML={{ __html: T_static.contactUsContent }} />
            <div style={{...styles.staticPageContent, marginTop: '30px'}}>
                <h3>{T_static.contactFormComingSoon}</h3>
                {/* Placeholder for a form or more details */}
            </div>
        </div>
    </section>
);


const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'el' | 'en'>('el');
  const [currentView, setCurrentView] = useState<'home' | 'featureDetail' | 'privacy' | 'terms' | 'contact'>('home');
  const [selectedFeatureSlug, setSelectedFeatureSlug] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setCurrentLanguage(prevLang => prevLang === 'el' ? 'en' : 'el');
    closeMobileMenu(); 
  };

  const T = translations[currentLanguage];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleFeatureClick = (feature: FeatureItem) => {
    setSelectedFeatureSlug(feature.pageSlug);
    setCurrentView('featureDetail');
    closeMobileMenu();
    window.scrollTo(0, 0);
  };

  const handleBackFromDetail = () => {
    setCurrentView('home');
    setSelectedFeatureSlug(null);
    closeMobileMenu();
    window.scrollTo(0, 0);
  };
  
  const handleLogoClick = () => {
    if (currentView !== 'home') {
        setCurrentView('home');
        setSelectedFeatureSlug(null);
    }
    closeMobileMenu();
    if (currentView === 'home' && window.scrollY === 0) { 
        // Do nothing 
    } else if (currentView === 'home') {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        window.scrollTo(0,0); 
    }
  };

  const handleNavLinkClick = (target: string) => {
    closeMobileMenu();
    if (currentView === 'home') {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        setCurrentView('home');
        setSelectedFeatureSlug(null);
        setTimeout(() => {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    }
  };

  const handleFooterLinkClick = (page: 'privacy' | 'terms' | 'contact') => {
    setCurrentView(page);
    setSelectedFeatureSlug(null); // Ensure no feature detail is selected
    closeMobileMenu();
    window.scrollTo(0, 0);
  };

  const featureToDisplay = selectedFeatureSlug 
    ? T.featureItems.find(f => f.pageSlug === selectedFeatureSlug) 
    : null;

  const renderView = () => {
    switch (currentView) {
        case 'featureDetail':
            return featureToDisplay ? <FeatureDetailPage feature={featureToDisplay} onBack={handleBackFromDetail} T_detail={T} /> : null;
        case 'privacy':
            return <PrivacyPolicyPage T_static={T} />;
        case 'terms':
            return <TermsOfServicePage T_static={T} />;
        case 'contact':
            return <ContactPage T_static={T} />;
        case 'home':
        default:
            return (
                <>
                  <section style={styles.hero} aria-labelledby="hero-title">
                    <div className="container">
                      <h1 id="hero-title" style={styles.heroTitle} className="fade-in-up">{T.heroTitle}</h1>
                      <p style={{...styles.heroSubtitle, animationDelay: '0.2s'}} className="fade-in-up">{T.heroSubtitle}</p>
                      <a onClick={() => handleNavLinkClick('#pricing')} className="btn btn-primary btn-large fade-in-up" style={{animationDelay: '0.4s', padding: '15px 35px', fontSize: '1.2rem', cursor:'pointer'}}>{T.heroCTA}</a>
                    </div>
                  </section>
        
                  <section id="features" style={styles.featuresSection} aria-labelledby="features-title">
                    <div className="container text-center">
                      <h2 id="features-title">{T.featuresTitle}</h2>
                      <p className="section-subtitle">{T.featuresSubtitle}</p>
                      <div style={styles.featuresGrid}>
                        {T.featureItems.map((feature, index) => (
                          <div 
                            key={feature.pageSlug} 
                            style={{...styles.featureCard, animationDelay: `${0.1 * index}s`}} 
                            className="fade-in-up feature-card-hoverable"
                            onClick={() => handleFeatureClick(feature)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleFeatureClick(feature)}
                            aria-label={`Learn more about ${feature.title}`}
                          >
                            <div style={styles.featureIconContainer}>
                                <i className={feature.icon} style={styles.featureIcon} aria-hidden="true"></i>
                                <h3 style={styles.featureTitle}>{feature.title}</h3>
                            </div>
                            <p style={styles.featureDescription}>{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
        
                  <section id="pricing" style={styles.pricingSection} aria-labelledby="pricing-title">
                    <div className="container text-center">
                      <h2 id="pricing-title">{T.pricingTitle}</h2>
                      <p className="section-subtitle">{T.pricingSubtitle}</p>
                      <div style={styles.pricingGrid}>
                        {T.pricingPlans.map((plan, index) => (
                          <div 
                            key={plan.name} 
                            style={{
                              ...styles.pricingCard, 
                              ...(plan.popular ? styles.pricingCardPopular : {}), 
                              animationDelay: `${0.1 * index}s`
                            }} 
                            className={`fade-in-up pricing-card-hoverable ${plan.popular ? 'popular-card' : ''}`}
                          >
                            <div> 
                              {plan.popular && <div style={styles.popularBadge}>{T.popularBadgeText}</div>}
                              <i className={plan.icon} style={{...styles.pricingIcon, marginTop: plan.popular ? '20px' : '0' }} aria-hidden="true"></i>
                              <h3 style={styles.pricingName}>{plan.name}</h3>
                              <p style={styles.pricingPrice}>
                                {plan.price}
                                <span style={styles.pricingPeriod}>{plan.period}</span>
                              </p>
                              <ul style={styles.pricingFeatures}>
                                {plan.features.map((featureText, fIndex) => (
                                  <li key={fIndex} style={styles.pricingFeatureItem}>
                                    <i className="fas fa-check-circle" style={styles.pricingFeatureIcon} aria-hidden="true"></i> {featureText}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <a href="#" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`} style={{marginTop: 'auto', width: 'calc(100% - 4px)', boxSizing: 'border-box', paddingTop: '12px', paddingBottom: '12px'}}>{plan.ctaText}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
        
                  <section style={styles.ctaSection} aria-labelledby="cta-title">
                      <div className="container">
                          <h2 id="cta-title" style={styles.ctaTitle}>{T.ctaTitle}</h2>
                          <p style={styles.ctaSubtitle}>{T.ctaSubtitle}</p>
                          <a href="#" className="btn btn-secondary btn-large" style={{padding: '15px 35px', fontSize: '1.2rem', backgroundColor: 'var(--bg-light)', color: 'var(--primary-color)'}}>{T.ctaButton}</a>
                      </div>
                  </section>
                </>
            );
    }
  };


  return (
    <>
      <HeaderComponent 
        T={T} 
        currentLanguage={currentLanguage} 
        toggleLanguage={toggleLanguage}
        onLogoClick={handleLogoClick}
        onNavLinkClick={handleNavLinkClick}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {renderView()}
      
      <FooterComponent T={T} onFooterLinkClick={handleFooterLinkClick} />
      
      <style>{`
        .nav-link-hover:hover {
          color: var(--primary-color) !important;
          border-bottom-color: var(--primary-color) !important;
        }
        .lang-button-hover:hover {
            background-color: var(--primary-color) !important;
            color: var(--text-light) !important;
        }
        .feature-card-hoverable:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
        }
        .pricing-card-hoverable:not(.popular-card):hover {
            transform: scale(1.03) !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .popular-card {
            /* transform: scale(1.03) is already applied via inline style */
        }
        .footer-link-hover:hover {
            opacity: 1 !important;
            text-decoration: underline;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-toggle {
            display: none; /* Hidden by default */
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 5px;
            z-index: 1001; /* Above nav links if they overlap somehow before JS */
        }

        @media (max-width: 768px) {
           .hero h1, .hero-title, #feature-title-${selectedFeatureSlug}, .featureDetailTitle, .staticPageTitle  { font-size: 2.2rem !important; } 
           .hero-subtitle { font-size: 1.1rem !important; }
           .features-grid, .pricing-grid, .screenshotsGrid { grid-template-columns: 1fr !important; }
           .hero { padding: 60px 0 !important; }
           section, .featureDetailSection, .staticPageSection { padding: 50px 15px !important; } 
           .pricing-card-popular { transform: scale(1) !important; } 
           .pricing-card-hoverable:not(.popular-card):hover { transform: scale(1.02) !important; }
          
           .mobile-nav-toggle {
               display: flex; /* Show burger */
               align-items: center;
               justify-content: center;
           }

           ul.main-nav-links:not(.mobile-menu-open) {
               display: none !important; /* Hide nav links by default on mobile when menu is closed */
           }

           ul.main-nav-links.mobile-menu-open {
               display: flex !important; /* Show when menu is open */
               flex-direction: column;
               align-items: stretch; /* Make li full width */
               position: absolute;
               top: 100%; /* Below header */
               left: 0;
               right: 0;
               background-color: var(--bg-light);
               box-shadow: 0 4px 10px rgba(0,0,0,0.1);
               padding: 10px 0; /* Vertical padding for the menu block */
               z-index: 1000; /* Ensure it's above other content */
           }

           ul.main-nav-links.mobile-menu-open > li {
               margin-left: 0; /* Override from styles.navLinkItem */
               width: 100%;
           }
           ul.main-nav-links.mobile-menu-open > li > a,
           ul.main-nav-links.mobile-menu-open > li > button { /* Lang button */
               padding: 12px 20px;
               display: block; 
               width: 100%;
               box-sizing: border-box;
               text-align: left;
               color: var(--text-dark); /* Ensure text color is readable */
               border-bottom: 1px solid var(--bg-medium);
           }
            ul.main-nav-links.mobile-menu-open > li > a.nav-link-hover:hover {
                background-color: var(--bg-medium);
                color: var(--primary-color) !important;
            }

           ul.main-nav-links.mobile-menu-open > li:last-child > a,
           ul.main-nav-links.mobile-menu-open > li:last-child > button {
               border-bottom: none;
           }
           
           ul.main-nav-links.mobile-menu-open .btn,
           ul.main-nav-links.mobile-menu-open .lang-button-hover {
               margin: 8px 20px;
               width: calc(100% - 40px); 
               box-sizing: border-box;
               text-align: center;
           }
        }
         @media (max-width: 480px) {
            .hero h1, .hero-title, #feature-title-${selectedFeatureSlug}, .featureDetailTitle, .staticPageTitle { font-size: 1.8rem !important; } 
            h2, .screenshotsTitle { font-size: 1.6rem !important; } 
            .btn { padding: 10px 18px !important; font-size: 0.85rem !important; }
            .btn-large { padding: 12px 22px !important; font-size: 0.95rem !important; }
            .footer-links { flex-direction: column; gap: 10px; }
            .feature-card, .featureDetailSection .container, .staticPageSection .container { padding: 20px !important;}
            .feature-title { font-size: 1.15rem;}
            .feature-description, .featureDetailDescription, .staticPageContent { font-size: 0.9rem !important;}
        }
        .staticPageContent h3 { font-size: 1.4rem; margin-top: 1.5em; margin-bottom: 0.5em; color: var(--text-dark); }
        .staticPageContent p { margin-bottom: 1em; }
        .staticPageContent strong { font-weight: 600; color: var(--text-dark); }
      `}</style>
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
