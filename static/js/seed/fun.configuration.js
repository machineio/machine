/*
 Configuration seed
*/
fun.conf = {
    // username account
    account: 'account',
    // dashboard context "organization"
    context: 'context',
    // html templates
    html: '/static/html',
    // internet domain
    domain: 'codemachine.io',
    // seed url root
    urlRoot: '/api/',

    // system uuid's
    uuidRecord: 'record_uuid',

    lapse: 'lapse',

    startTime: 'start_time',
    endTime: 'end_time',

    first: 'first',
    last: 'last',

    next: 'next',
    previous: 'previous',

    pageNumber: 'page_number',
    pageSize: 'page_size',
    pageSmall: 8,
    pageMedium: 13,
    pageBig: 21
};


/*
 System urls
*/
fun.conf.urls = {
    login: 'https://api.spartanapproach.com',
    logout: 'https://lb.codemachine.io/logout',
    users: 'https://lb.codemachine.io/users/',
    emails: 'https://lb.codemachine.io/emails/'
};

/*
 HTML templates
*/
fun.conf.templates = {
    navbar: fun.utils.format('%s/navbar.html', fun.conf.html),

    navLanding: fun.utils.format('%s/navLanding.html', fun.conf.html),
    navDashboard: fun.utils.format('%s/navDashboard.html', fun.conf.html),

    navAdmin: fun.utils.format('%s/navAdmin.html', fun.conf.html), // ultimate junk!

    subheader: fun.utils.format('%s/subheader.html', fun.conf.html),
    headNav: fun.utils.format('%s/headNav.html', fun.conf.html),
    headNavCampaigns: fun.utils.format('%s/headNavCampaigns.html', fun.conf.html),
    headNavReports: fun.utils.format('%s/headNavReports.html', fun.conf.html),

    landing: fun.utils.format('%s/landing.html', fun.conf.html),

    support: fun.utils.format('%s/support.html', fun.conf.html),
    features: fun.utils.format('%s/features.html', fun.conf.html),
    enterprise: fun.utils.format('%s/enterprise.html', fun.conf.html),
    howto: fun.utils.format('%s/howto.html', fun.conf.html),
    blog: fun.utils.format('%s/blog.html', fun.conf.html),
    status: fun.utils.format('%s/status.html', fun.conf.html),

    tasks: fun.utils.format('%s/tasks.html', fun.conf.html),
    allTasks: fun.utils.format('%s/allTasks.html', fun.conf.html),
    taskRow: fun.utils.format('%s/taskRow.html', fun.conf.html),
    taskListItem: fun.utils.format('%s/taskListItem.html', fun.conf.html),

    recordings: fun.utils.format('%s/recordings.html', fun.conf.html),
    allRecordings: fun.utils.format('%s/allRecordings.html', fun.conf.html),
    recordingRow: fun.utils.format('%s/recordingRow.html', fun.conf.html),
    recordingListItem: fun.utils.format('%s/recordingListItem.html', fun.conf.html),

    gateways: fun.utils.format('%s/gateways.html', fun.conf.html),
    allGateways: fun.utils.format('%s/allGateways.html', fun.conf.html),
    gatewayRow: fun.utils.format('%s/gatewayRow.html', fun.conf.html),
    gatewayListItem: fun.utils.format('%s/gatewayListItem.html', fun.conf.html),

    accounts: fun.utils.format('%s/accounts.html', fun.conf.html),
    allAccounts: fun.utils.format('%s/allAccounts.html', fun.conf.html),
    accountRow: fun.utils.format('%s/accountRow.html', fun.conf.html),
    accountListItem: fun.utils.format('%s/accountListItem.html', fun.conf.html),

    resources: fun.utils.format('%s/resources.html', fun.conf.html),
    allResources: fun.utils.format('%s/allResources.html', fun.conf.html),
    resourceRow: fun.utils.format('%s/resourceRow.html', fun.conf.html),
    resourceListItem: fun.utils.format('%s/resourceListItem.html', fun.conf.html),

    companies: fun.utils.format('%s/companies.html', fun.conf.html),
    allCompanies: fun.utils.format('%s/allCompanies.html', fun.conf.html),
    companyRow: fun.utils.format('%s/companyRow.html', fun.conf.html),
    companyListItem: fun.utils.format('%s/companyListItem.html', fun.conf.html),

    developers: fun.utils.format('%s/developers.html', fun.conf.html),
    help: fun.utils.format('%s/help.html', fun.conf.html),
    security: fun.utils.format('%s/security.html', fun.conf.html),
    terms: fun.utils.format('%s/terms.html', fun.conf.html),

    privacy: fun.utils.format('%s/privacy.html', fun.conf.html),

    signup: fun.utils.format('%s/signup.html', fun.conf.html),

    login: fun.utils.format('%s/login.html', fun.conf.html),

    dashboard: fun.utils.format('%s/dashboard.html', fun.conf.html),

    orgs: fun.utils.format('%s/orgs.html', fun.conf.html),

    campaigns: fun.utils.format('%s/campaigns.html', fun.conf.html),
    allCampaigns: fun.utils.format('%s/allCampaigns.html', fun.conf.html),
    campaignRow: fun.utils.format('%s/campaignRow.html', fun.conf.html),

    cubes: fun.utils.format('%s/cubes.html', fun.conf.html),
    allCubes: fun.utils.format('%s/allCubes.html', fun.conf.html),
    cubeRow: fun.utils.format('%s/cubeRow.html', fun.conf.html),


    accountListItem: fun.utils.format('%s/accountListItem.html', fun.conf.html),

    campaignListItem: fun.utils.format('%s/campaignListItem.html', fun.conf.html),

    cubeListItem: fun.utils.format('%s/cubeListItem.html', fun.conf.html),


    recordRow: fun.utils.format('%s/recordRow.html', fun.conf.html),
    typeRow: fun.utils.format('%s/typeRow.html', fun.conf.html),
    sumRow: fun.utils.format('%s/sumRow.html', fun.conf.html),

    lastRecord: fun.utils.format('%s/lastRecord.html', fun.conf.html),
    latestRecords: fun.utils.format('%s/latestRecords.html', fun.conf.html),

    recordType: fun.utils.format('%s/recordType.html', fun.conf.html),
    recordSummary: fun.utils.format('%s/recordSummary.html', fun.conf.html),

    todaySummary: fun.utils.format('%s/todaySummary.html', fun.conf.html),
    todayActivityChart: fun.utils.format('%s/todayActivityChart.html', fun.conf.html),

    dialpad: fun.utils.format('%s/dialpad.html', fun.conf.html),

    messages: fun.utils.format('%s/messages.html', fun.conf.html),
    videos: fun.utils.format('%s/videos.html', fun.conf.html),

    controlTo: fun.utils.format('%s/controlTo.html', fun.conf.html),
    controlFrom: fun.utils.format('%s/controlFrom.html', fun.conf.html),
    findLapse: fun.utils.format('%s/findLapse.html', fun.conf.html),

    message: fun.utils.format('%s/message.html', fun.conf.html),
    messageSmall: fun.utils.format('%s/messageSmall.html', fun.conf.html),
    messageMedium: fun.utils.format('%s/messageMedium', fun.conf.html),
    messageLarge: fun.utils.format('%s/messageLarge', fun.conf.html),

    warning: fun.utils.format('%s/warning.html', fun.conf.html),
    warningSmall: fun.utils.format('%s/warningSmall.html', fun.conf.html),
    warningMedium: fun.utils.format('%s/warningMedium.html', fun.conf.html),
    warningLarge: fun.utils.format('%s/warningLarge.html', fun.conf.html),

    error: fun.utils.format('%s/error.html', fun.conf.html),
    errorSmall: fun.utils.format('%s/errorSmall.html', fun.conf.html),
    errorMedium: fun.utils.format('%s/errorMedium.html', fun.conf.html),
    errorLarge: fun.utils.format('%s/errorLarge.html', fun.conf.html),

    numbers: fun.utils.format('%s/numbers.html', fun.conf.html),

    phone: fun.utils.format('%s/phone.html', fun.conf.html),

    phoneNumbers: fun.utils.format('%s/phoneNumbers.html', fun.conf.html),

    profile: fun.utils.format('%s/profile.html', fun.conf.html),

    activity: fun.utils.format('%s/activity.html', fun.conf.html),

    members: fun.utils.format('%s/members.html', fun.conf.html),
    memberRow: fun.utils.format('%s/memberRow.html', fun.conf.html),

    teams: fun.utils.format('%s/teams.html', fun.conf.html),
    teamRow: fun.utils.format('%s/teamRow.html', fun.conf.html),

    contact: fun.utils.format('%s/contact.html', fun.conf.html),
    contacts: fun.utils.format('%s/contacts.html', fun.conf.html),
    allContacts: fun.utils.format('%s/allContacts.html', fun.conf.html),

    directoryList: fun.utils.format('%s/directoryList.html', fun.conf.html),
    contactRow: fun.utils.format('%s/contactRow.html', fun.conf.html),
    directoryRow: fun.utils.format('%s/directoryRow.html', fun.conf.html),
    sounds: fun.utils.format('%s/sounds.html', fun.conf.html),


    reports: fun.utils.format('%s/reports.html', fun.conf.html),
    settings: fun.utils.format('%s/settings.html', fun.conf.html),

    extra: fun.utils.format('%s/extra.html', fun.conf.html),
    extraNavbar: fun.utils.format('%s/extraNavbar.html', fun.conf.html),
    extraNavLanding: fun.utils.format('%s/extraNavLanding.html', fun.conf.html),
    extraNavDashboard: fun.utils.format('%s/extraNavDashboard.html', fun.conf.html),

    social: fun.utils.format('%s/social.html', fun.conf.html),
    subscribe: fun.utils.format('%s/subscribe.html', fun.conf.html),

    callMachine: fun.utils.format('%s/callMachine.html', fun.conf.html),
    emailMachine: fun.utils.format('%s/emailMachine.html', fun.conf.html),
    techMachine: fun.utils.format('%s/techMachine.html', fun.conf.html),
    digitalMachine: fun.utils.format('%s/digitalMachine.html', fun.conf.html),

    footer: fun.utils.format('%s/footer.html', fun.conf.html)
};

/*
 Hash tags for backbone.js router
*/
fun.conf.hash = {
    home: '#home',
    landing: '#landing',
    contact: '#contact',
    howto: '#howto',
    features: '#features',
    enterprise: '#enterprise',
    terms: '#terms',
    privacy: '#privacy',
    security: '#security',
    blog: '#blog',
    status: '#status',
    developers: '#developers',
    help: '#help',
    support: '#support',
    signup: '#signup',
    login: '#login',
    gateways: '#gateways',
    accounts: '#accounts',
    messages: '#messages',
    resources: '#resources',

    dashboard: '#dashboard',
    dashboardWithAccount: '#dashboard/a{account}',

    profile: '#profile',
    profileWithAccount: '#profile/a{account}',

    activity: '#activity',
    orgs: '#orgs',
    campaigns: '#campaigns',
    cohorts: '#cohorts',
    nodes: '#nodes',
    clusters: '#clusters',
    members: '#members',
    numbers: '#numbers',
    teams: '#teams',
    phone: '#phone',
    reports: '#reports',
    reportsWithPage: '#reports/p{page}',
    carriers: '#carriers',
    contacts: '#contacts',
    cubes: '#cubes',
    contactsWithPage: '#contacts/p{page}',
    tasks: '#tasks',
    companies: '#companies',
    sounds: '#sounds',
    recordings: '#recordings',
    settings: '#settings'
};
