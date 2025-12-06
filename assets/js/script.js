const productData = [
    {
        id: 'gaming-vps-proline', 
        name: 'سرور مجازی گیمینگ پرولاین',
        location: 'آلمان',
        short_desc: 'سرور گیمینگ حرفه‌ای با عملکرد فوق‌العاده',
        features: ['۸ هسته‌ای AMD EPYC', '۱۶ گیگابایت رم DDR4', 'پینگ بسیار پایین'],
        start_price: '۸۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=101'
    },
    {
        id: 'respina-cloud-vps-xt', 
        name: 'سرور ابری رسپینا XT',
        location: 'ایران',
        short_desc: 'سرور ابری با اتصال مستقیم ایران',
        features: ['۴ هسته‌ای Intel Xeon', '۸ گیگابایت رم DDR4', 'پهنای باند ملی'],
        start_price: '۵۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=102'
    },
    {
        id: 'fanava-hyper-vps', 
        name: 'سرور هایپر فن‌آوا',
        location: 'ایران',
        short_desc: 'سرور مجازی با منابع تضمینی',
        features: ['۶ هسته‌ای', '۱۲ گیگابایت رم DDR4', 'منابع تضمین شده'],
        start_price: '۶۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=103'
    },
    {
        id: 'economy-game-vps-plus', 
        name: 'سرور گیم اقتصادی پلاس',
        location: 'آلمان',
        short_desc: 'سرور اقتصادی برای شروع',
        features: ['۲ هسته‌ای', '۴ گیگابایت رم DDR4', 'قیمت مناسب'],
        start_price: '۱۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=104'
    },
    {
        id: 'turkey-speedvps-turbo', 
        name: 'سرور سرعتی ترکیه توربو',
        location: 'ترکیه',
        short_desc: 'سرور ترکیه با پینگ عالی',
        features: ['۴ هسته‌ای AMD Ryzen', '۸ گیگابایت رم DDR4', 'پینگ پایین منطقه'],
        start_price: '۴۴۹,۰۰۰/ماه',
        is_popular: true, 
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=105'
    },
    {
        id: 'asiatech-cloudcore-vps', 
        name: 'سرور ابری آسیاتک',
        location: 'ایران',
        short_desc: 'سرور ابری آسیاتک',
        features: ['۴ هسته‌ای', '۸ گیگابایت رم DDR4', 'زیرساخت ابری'],
        start_price: '۵۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=106'
    },
    {
        id: 'shatel-ultravps-series', 
        name: 'سرور اولترا شاتل',
        location: 'ایران',
        short_desc: 'سرور اولترا با پهنای باند بالا',
        features: ['۶ هسته‌ای', '۱۶ گیگابایت رم DDR4', 'پهنای باند بالا'],
        start_price: '۷۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=107'
    },
    {
        id: 'pishgaman-highpower-vps', 
        name: 'سرور پرقدرت پیشگامان',
        location: 'ایران',
        short_desc: 'سرور پرقدرت برای پروژه‌های سنگین',
        features: ['۸ هسته‌ای', '۳۲ گیگابایت رم DDR4', 'مناسب کارهای سنگین'],
        start_price: '۱,۲۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=108'
    },
    {
        id: 'germany-titanvps', 
        name: 'سرور تایتان آلمان',
        location: 'آلمان',
        short_desc: 'سرور قدرتمند آلمان',
        features: ['۶ هسته‌ای Intel Xeon', '۱۶ گیگابایت رم DDR4', 'عملکرد پایدار'],
        start_price: '۸۴۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=109'
    },
    {
        id: 'premium-ryzen-vps-boost', 
        name: 'سرور رایزن پریمیوم بوست',
        location: 'هلند',
        short_desc: 'سرور رایزن نسل جدید',
        features: ['۸ هسته‌ای AMD Ryzen 9', '۳۲ گیگابایت رم DDR5', 'جدیدترین سخت‌افزار'],
        start_price: '۱,۴۹۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=110'
    },
    {
        id: 'europe-cloudedge-vps', 
        name: 'سرور کلودایج اروپا',
        location: 'اروپا',
        short_desc: 'سرور Edge اروپا',
        features: ['۴ هسته‌ای', '۸ گیگابایت رم DDR4', 'اتصال به نقاط اروپا'],
        start_price: '۵۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=111'
    },
    {
        id: 'iran-turbocompute-vps', 
        name: 'سرور توربو ایران',
        location: 'ایران',
        short_desc: 'سرور توربو داخلی',
        features: ['۴ هسته‌ای', '۸ گیگابایت رم DDR4', 'شبکه داخلی پرسرعت'],
        start_price: '۴۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=112'
    },
    {
        id: 'global-novavps-enterprise', 
        name: 'سرور نووا سازمانی',
        location: 'جهانی',
        short_desc: 'سرور سازمانی جهانی',
        features: ['۱۶ هسته‌ای', '۶۴ گیگابایت رم DDR4', 'منابع اختصاصی سازمانی'],
        start_price: '۳,۹۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=113'
    },
    {
        id: 'gamerx-lowlatency-vps', 
        name: 'سرور گیمرایکس لو لیتنسی',
        location: 'آلمان',
        short_desc: 'سرور با حداقل لیتنسی',
        features: ['۶ هسته‌ای AMD Ryzen', '۱۶ گیگابایت رم DDR4', 'مناسب گیمرها'],
        start_price: '۷۹۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=114'
    },
    {
        id: 'minecraft-server-prime', 
        name: 'سرور ماینکرفت پرایم',
        location: 'آلمان',
        short_desc: 'سرور ماینکرفت حرفه‌ای',
        features: ['۴ هسته‌ای', '۸ گیگابایت رم DDR4', 'تا ۱۰۰ پلیر'],
        start_price: '۲۹۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=115'
    },
    {
        id: 'rust-dedicated-server-forge', 
        name: 'سرور اختصاصی راست فورج',
        location: 'هلند',
        short_desc: 'سرور Rust با منابع بالا',
        features: ['۶ هسته‌ای', '۱۶ گیگابایت رم DDR4', 'تا ۲۰۰ پلیر'],
        start_price: '۵۹۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=116'
    },
    {
        id: 'mta-game-server-reactor', 
        name: 'سرور MTA ری‌اکتور',
        location: 'آلمان',
        short_desc: 'سرور MTA حرفه‌ای',
        features: ['۴ هسته‌ای', '۸ گیگابایت رم DDR4', 'تا ۵۰۰ پلیر'],
        start_price: '۳۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=117'
    },
    {
        id: 'cs-go-tactical-server-pro', 
        name: 'سرور تاکتیکال CS:GO پرو',
        location: 'آلمان',
        short_desc: 'سرور CS:GO مسابقه‌ای',
        features: ['۴ هسته‌ای', '۸ گیگابایت رم DDR4', '۱۲۸ Tick'],
        start_price: '۲۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=118'
    },
    {
        id: 'fivem-roleplay-core', 
        name: 'سرور FiveM رول‌پلی کور',
        location: 'هلند',
        short_desc: 'سرور FiveM رول‌پلی',
        features: ['۸ هسته‌ای', '۳۲ گیگابایت رم DDR4', 'تا ۵۰۰ پلیر'],
        start_price: '۸۹۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=119'
    },
    {
        id: 'samp-ultimate-server-pack', 
        name: 'سرور SAMP آلتیمیت',
        location: 'آلمان',
        short_desc: 'پکیج کامل SA-MP',
        features: ['۲ هسته‌ای', '۴ گیگابایت رم DDR4', 'تا ۱۰۰۰ پلیر'],
        start_price: '۱۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=120'
    },
    {
        id: 'cs-1-6-classic-server', 
        name: 'سرور کلاسیک CS 1.6',
        location: 'آلمان',
        short_desc: 'سرور CS 1.6 کلاسیک',
        features: ['۲ هسته‌ای', '۲ گیگابایت رم DDR4', '۳۲ پلیر'],
        start_price: '۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=121'
    },
    {
        id: 'cs-source-elite-server', 
        name: 'سرور الیت CS Source',
        location: 'آلمان',
        short_desc: 'سرور CSS حرفه‌ای',
        features: ['۲ هسته‌ای', '۴ گیگابایت رم DDR4', '۶۴ پلیر'],
        start_price: '۱۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=122'
    },
    {
        id: 'ark-survival-server-nexus', 
        name: 'سرور ARK نکسوس',
        location: 'هلند',
        short_desc: 'سرور ARK با منابع بالا',
        features: ['۶ هسته‌ای', '۲۴ گیگابایت رم DDR4', 'تا ۱۰۰ پلیر'],
        start_price: '۶۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=123'
    },
    {
        id: 'valheim-viking-server-shield', 
        name: 'سرور والهایم وایکینگ',
        location: 'آلمان',
        short_desc: 'سرور Valheim',
        features: ['۴ هسته‌ای', '۸ گیگابایت رم DDR4', 'تا ۱۰ پلیر'],
        start_price: '۱۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=124'
    },
    {
        id: 'gta-online-modded-server-unit', 
        name: 'سرور GTA آنلاین مود شده',
        location: 'هلند',
        short_desc: 'سرور GTA V مود شده',
        features: ['۶ هسته‌ای', '۱۶ گیگابایت رم DDR4', 'تا ۲۰۰ پلیر'],
        start_price: '۵۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=125'
    },
    {
        id: 'minecraft-bedrock-server-pulse', 
        name: 'سرور ماینکرفت بدراک پالس',
        location: 'آلمان',
        short_desc: 'سرور Minecraft Bedrock',
        features: ['۲ هسته‌ای', '۴ گیگابایت رم DDR4', 'تا ۵۰ پلیر'],
        start_price: '۱۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=126'
    },
    {
        id: 'team-fortress-2-server-max', 
        name: 'سرور TF2 مکس',
        location: 'آلمان',
        short_desc: 'سرور TF2 حرفه‌ای',
        features: ['۲ هسته‌ای', '۴ گیگابایت رم DDR4', '۳۲ پلیر'],
        start_price: '۱۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=127'
    },
    {
        id: 'ryzen-vps-ultracore-edition', 
        name: 'سرور رایزن اولتراکور',
        location: 'هلند',
        short_desc: 'سرور رایزن اولتراکور',
        features: ['۱۲ هسته‌ای AMD Ryzen', '۶۴ گیگابایت رم DDR5', 'عملکرد فوق‌العاده'],
        start_price: '۲,۴۹۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=128'
    },
    {
        id: 'ip-rental-pro-service', 
        name: 'سرویس اجاره IP پرو',
        location: 'جهانی',
        short_desc: 'اجاره IP اختصاصی',
        features: ['IP اختصاصی', 'پینگ تضمین شده', 'پشتیبانی فنی'],
        start_price: '۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=129'
    },
    {
        id: 'teamspeak-botx-automation', 
        name: 'ربات اتوماسیون تیم‌اسپیک',
        location: 'آلمان',
        short_desc: 'ربات مدیریت Teamspeak',
        features: ['مدیریت خودکار', 'قابلیت‌های پیشرفته', 'پایداری بالا'],
        start_price: '۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=130'
    },
    {
        id: 'germany-hosting-deluxe', 
        name: 'هاست دلوکس آلمان',
        location: 'آلمان',
        short_desc: 'هاست پرسرعت آلمان',
        features: ['هارد NVMe', 'پهنای باند نامحدود', 'پشتیبانی ۲۴/۷'],
        start_price: '۱۹۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=131'
    },
    {
        id: 'colocation-prorack', 
        name: 'کولوکیشن پرو رک',
        location: 'ایران',
        short_desc: 'کولوکیشن حرفه‌ای',
        features: ['فضای اختصاصی رک', 'پهنای باند بالا', 'امنیت فیزیکی'],
        start_price: '۹۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=132'
    },
    {
        id: 'teamspeak-titan-server', 
        name: 'سرور تایتان تیم‌اسپیک',
        location: 'آلمان',
        short_desc: 'سرور Teamspeak پرظرفیت',
        features: ['ظرفیت بالا', 'پایداری سرور', 'کیفیت صدای HD'],
        start_price: '۱۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=133'
    },
    {
        id: 'teamspeak-reseller-plus', 
        name: 'نمایندگی تیم‌اسپیک پلاس',
        location: 'آلمان',
        short_desc: 'پنل نمایندگی Teamspeak',
        features: ['پنل مدیریت کامل', 'بدون محدودیت تعداد', 'قیمت مناسب'],
        start_price: '۴۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=134'
    },
    {
        id: 'iran-linux-hosting-premium', 
        name: 'هاست لینوکس پریمیوم ایران',
        location: 'ایران',
        short_desc: 'هاست لینوکس ایران',
        features: ['هارد SSD', 'پنل cPanel', 'بک‌آپ روزانه'],
        start_price: '۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=135'
    },
    {
        id: 'firewall-protection-shield', 
        name: 'فایروال محافظتی شیلد',
        location: 'جهانی',
        short_desc: 'فایروال محافظتی',
        features: ['محافظت لایه ۷', 'فیلترینگ ترافیک', 'نصب رایگان'],
        start_price: '۱۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=136'
    },
    {
        id: 'cloud-backup-vault', 
        name: 'فضای بکاپ ابری ولت',
        location: 'آلمان',
        short_desc: 'فضای بکاپ ابری',
        features: ['امنیت بالا', 'دسترسی سریع', 'رمزگذاری قوی'],
        start_price: '۹۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=137'
    },
    {
        id: 'anti-ddos-maxguard', 
        name: 'آنتی دیداس مکس‌گارد',
        location: 'جهانی',
        short_desc: 'محافظت DDoS پیشرفته',
        features: ['لایه ۳/۴/۷', 'فیلترینگ هوشمند', 'پشتیبانی ۲۴ ساعته'],
        start_price: '۲۹۹,۰۰۰/ماه',
        is_popular: true,
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=138'
    },
    {
        id: 'promail-email-hosting', 
        name: 'میزبانی ایمیل پرو میل',
        location: 'آلمان',
        short_desc: 'ایمیل حرفه‌ای',
        features: ['فضای اختصاصی', 'ضد اسپم پیشرفته', 'امنیت بالا'],
        start_price: '۷۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=139'
    },
    {
        id: 'domain-registration-center', 
        name: 'مرکز ثبت دامنه',
        location: 'جهانی',
        short_desc: 'ثبت دامنه',
        features: ['انتقال آسان', 'قیمت‌های رقابتی', 'پنل مدیریت کامل'],
        start_price: '۴۹,۰۰۰/ماه',
        whmcsLink: 'https://yourwhmcsdomain.com/cart.php?a=add&pid=140'
    }
];

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadProductDetails() {
    if (!document.querySelector('.product-detail-page')) {
        return;
    }

    const productId = getQueryParameter('id');
    const product = productData.find(p => p.id === productId);

    const productNameEl = document.getElementById('product-name');
    const productDescEl = document.getElementById('product-description');
    const productFeaturesEl = document.getElementById('product-features');
    const buyButtonEl = document.getElementById('buy-button');
    const pageTitleEl = document.getElementById('product-page-title');
    const productContentEl = document.getElementById('product-content');

    if (product) {
        productNameEl.textContent = product.name;
        productDescEl.textContent = product.short_desc;
        pageTitleEl.textContent = product.name + ' | AriaHost';

        const ul = document.createElement('ul');
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            ul.appendChild(li);
        });
        
        productFeaturesEl.innerHTML = '<h2>ویژگی‌های کلیدی</h2>';
        productFeaturesEl.appendChild(ul);
        
        buyButtonEl.href = product.whmcsLink;
        buyButtonEl.style.display = 'block';

        productContentEl.classList.add('glass-container');

    } else {
        productNameEl.textContent = 'محصول مورد نظر یافت نشد.';
        productDescEl.textContent = 'لطفاً از صفحه محصولات اقدام کنید.';
        buyButtonEl.style.display = 'none';
    }
}

let lastScrollY = 0;
const header = document.querySelector('.main-header');

function handleScroll() {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
        header.style.top = '-80px'; 
    } else {
        header.style.top = '0';
    }
    lastScrollY = window.scrollY;
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', loadProductDetails);
