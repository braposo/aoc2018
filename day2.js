function part1(list) {
    const two = [];
    const three = [];

    list.forEach(el => {
        const chars = el.split("");

        // build char repetition index
        const index = chars.reduce((obj, el) => {
            const val = obj[el] != null ? obj[el] + 1 : 1;
            return { ...obj, [el]: val };
        }, {});

        // put ID into groups
        const values = Object.values(index);

        if (values.includes(2)) {
            two.push(el);
        }

        if (values.includes(3)) {
            three.push(el);
        }
    });

    // return checksum
    return two.length * three.length;
}

function part2(list) {
    let match;
    let baseChars;

    while (match == null) {
        const base = list.pop();
        baseChars = base.split("");

        list.some(id => {
            const elChars = id.split("");
            let diff = 0;

            // compare base with current id
            const isMatch = !baseChars.some((char, index) => {
                if (char !== elChars[index]) {
                    diff++;
                }

                return diff > 1;
            });

            // found a match
            if (isMatch) {
                match = elChars;
                return true;
            }

            return false;
        });
    }

    const commonChars = baseChars.filter((char, i) => match[i] === char);
    return commonChars.join("");
}

const input = [
    "zihrtxagncfpbsnolxydujjmqv",
    "zihrtxagwcfpbsoolnydukjyqv",
    "aihrtxagwcfpbsnoleybmkjmqv",
    "zihrtxagwcfpbsnolgyduajmrv",
    "zihrtxgmwcfpbunoleydukjmqv",
    "zihqtxagwcfpbsnolesdukomqv",
    "zihgtxagwcfpbsnoleydqkjqqv",
    "dihrtxagwcqpbsnoleydpkjmqv",
    "qihrtvagwcfpbsnollydukjmqv",
    "zihrtgagwcfpbknoleyrukjmqv",
    "cinrtxagwcfpbsnoleydukjaqv",
    "zihrtxagwcfubsneleyvukjmqv",
    "zihrtxagwcfpbsvoleydukvmtv",
    "zihrtpagwcffbsnolfydukjmqv",
    "zihrtxagwcfpbsxoleydtkjyqv",
    "zohrvxugwcfpbsnoleydukjmqv",
    "zyhrtxagdcfpbsnodeydukjmqv",
    "zihrtxaghffpbsnoleyduojmqv",
    "oihrtbagwcfpbsnoleyduejmqv",
    "zihrtnagwcvpjsnoleydukjmqv",
    "iihrtxagwcfpbsnoliyaukjmqv",
    "ziartxagwcfpbsnokeydukjmpv",
    "eibrtxagwccpbsnoleydukjmqv",
    "zihrtxagwczwbsaoleydukjmqv",
    "ziiatuagwcfpbsnoleydukjmqv",
    "zzhrtxagwckpbsnsleydukjmqv",
    "cihrtxaqwcfpbsnoleydkkjmqv",
    "zihrtxaywcfpbsnoleydukzdqv",
    "zihrtxagwjfpbvnoleydukjmql",
    "zihrtxagwcfpbsnoleuduksmql",
    "zizrtxxgwcfpbsnoleydukzmqv",
    "zihrteagwcfpbsnobeydukjmqe",
    "zihrtxafwhfpbsgoleydukjmqv",
    "zitrtxagwcfpbsnoleyduvymqv",
    "zihrtxauwcfebsnoleygukjmqv",
    "zihrtxagwcfpbsnoleydubjrqh",
    "zihrtxauwmfpbsnoleydukjmqo",
    "zihrtxagwcdpbsnoleydukxmov",
    "zihrtmagwcfpbsnoleydukvmlv",
    "ziwrtxhgwcfpbsnoleodukjmqv",
    "zihytxagacfpbsnoceydukjmqv",
    "zihrtxagwcfpbsnolebdugjnqv",
    "zihrzxagwcfpbsnjleyduktmqv",
    "zihrtxygwcfpbinoleysukjmqv",
    "zihrtxagwcfpbmnoveydujjmqv",
    "zidrtxagwcfpbsnolexaukjmqv",
    "zshrtxagwcepbsnoxeydukjmqv",
    "yibrtxagwzfpbsnoleydukjmqv",
    "zehrtxagwclpbsnoleymukjmqv",
    "zihruxagwcfpbsnoleyhukwmqv",
    "zihrwxagwcfpbszolesdukjmqv",
    "zihrtpagwcfpbwnoleyuukjmqv",
    "ziortxagwcfpssnolewdukjmqv",
    "zohrtxagwcfpbwnoleydukjmjv",
    "zihrtxagwcfpbsnvleyduzcmqv",
    "zihrvxaghcfpbswoleydukjmqv",
    "zihrtxagwcfpssnolwydukzmqv",
    "zjhrttagwcfpbsnolfydukjmqv",
    "zihrtxagwjfpbsnoljydukpmqv",
    "ziwrtxagwczpbsnoljydukjmqv",
    "zinrtxagwcfpbvfoleydukjmqv",
    "zihrgragwcfpbsnoleydutjmqv",
    "zihrtxagwcfpbsnozeydukffqv",
    "zihrtxagwcfpbsmoleydxkumqv",
    "rihwtxagwcfpbsxoleydukjmqv",
    "ziqrtxagwcfpbsnqlevdukjmqv",
    "zihrtxagwchpbsnoleydufamqv",
    "sihrtxagwcfpbsnoleldukjmqp",
    "zihrtxagwcrpbsnoleydvojmqv",
    "zihrtxacwcfpbsnoweyxukjmqv",
    "zihrtxagwcfpbsnolajmukjmqv",
    "zzfrtxagwcfpbsnoleydukjmvv",
    "zixrtxagwcfpbqnoleydukjgqv",
    "zihitxaqwcfpbsnoleadukjmqv",
    "zilrtxagecfxbsnoleydukjmqv",
    "zihrtxagwcfpbypoleycukjmqv",
    "zidrtxagdtfpbsnoleydukjmqv",
    "lehrtxagxcfpbsnoleydukjmqv",
    "zihrlxagwcfpbsncneydukjmqv",
    "zihroxagbcspbsnoleydukjmqv",
    "zihrtxagwcfkzsnolemdukjmqv",
    "zihrtxagwcfpbsqeleydukkmqv",
    "zihrjxagwcfpesnolxydukjmqv",
    "zifrtxagwcfpbsooleydukkmqv",
    "zirwtxagwcfpbsnoleydukzmqv",
    "zjhntxagwcfpbsnoleydunjmqv",
    "ziorexagwcfpbsnoyeydukjmqv",
    "zhhrtlagwcfybsnoleydukjmqv",
    "zirrtxagwvfsbsnoleydukjmqv",
    "bihrtxagwofpbsnoleadukjmqv",
    "dihrtxagwcfpksnoleydukjlqv",
    "zihrrxagecfpbsnoleydukjmyv",
    "zijrtxagwmfpbsnoleyduljmqv",
    "zihrtxagwcfpbsnolecdukjpqs",
    "zchrtxagwcfpbsnolehdukjmwv",
    "rmhrtxagwcfpbsnoleydkkjmqv",
    "zohrotagwcfpbsnoleydukjmqv",
    "zihwtxagsifpbsnwleydukjmqv",
    "zihrtxagicfpbsnoleydukjxqn",
    "zihrtxsgwcfpbsntleydumjmqv",
    "zihrlxagzgfpbsnoleydukjmqv",
    "aihjtxagwdfpbsnoleydukjmqv",
    "zifrtxagwcfhbsnoleddukjmqv",
    "zihrtyagwcfpbsooleydtkjmqv",
    "zihrtxxgwcfpbsnolerhukjmqv",
    "zihqtxalwcfppsnoleydukjmqv",
    "zfkrvxagwcfpbsnoleydukjmqv",
    "zihptxagwcfpbseoleydukjmdv",
    "zihrtxagwcfpeonoleyiukjmqv",
    "nidrtxagwcfpbsnoleyhukjmqv",
    "zihrtxagwcfjbsnolsydukjmqg",
    "zghryxagwcfgbsnoleydukjmqv",
    "zihwtxagwcfpbsnoleydugjfqv",
    "zihryxagwjfpbsnoleydujjmqv",
    "zihrtxagwcfpbsnolekdukymql",
    "zfhrtxaownfpbsnoleydukjmqv",
    "zamrtxagwcfpbsnoleyduzjmqv",
    "ibhrtxagwcfpbsnoleydukjmfv",
    "zihrtxagwcfpssnoseydukjmuv",
    "zihrtxagwcfpbsnoljydukjhqs",
    "zihrtxagwqfmbsnoleidukjmqv",
    "zfdrtxagwchpbsnoleydukjmqv",
    "iihrtxagqcfpbsnoleydukjmqn",
    "mihrtxagwcfpbsqoleydukjbqv",
    "zihttxagwcfpbsnoleyduljmqk",
    "zzhrtxagwcfpzseoleydukjmqv",
    "zdhrtxagbcfpbsnoleyduyjmqv",
    "zihxtxagwcfpbsnolwrdukjmqv",
    "zghrtxagwcypbynoleydukjmqv",
    "zihrtxaiwcfppsnoleydukgmqv",
    "zitatxagwcfobsnoleydukjmqv",
    "znhrtxagwcfpysnoleydukjqqv",
    "zihrtxagwcfppsnoleoyukjmqv",
    "ziorgxagwcfpbsnolekdukjmqv",
    "zihrtxagwcfpbfnoleydwkjpqv",
    "zihrtxnrwcfpbsnolnydukjmqv",
    "rihrtxagwcfpbsnolepdjkjmqv",
    "zihrtxagwcfzbsnoceydukjmkv",
    "zihrtxagwcfpysnoaeidukjmqv",
    "zihrmxagwcfpbsnoleydukjmuq",
    "gihrtxagwcvpbsnoleydukcmqv",
    "zihrtxagocfpbsnoleydukqmnv",
    "zihrtxagwcfpesnoleyluklmqv",
    "zghrtxagwcfzbsnoleydukjmgv",
    "zihrtxugqqfpbsnoleydukjmqv",
    "zirrtcagwcfpbsnoleydfkjmqv",
    "zihitxagwcfpjsnoleydnkjmqv",
    "zihrtxqgwcfpbsnsleydukjmqy",
    "iihrtxagwyfpbsnoleydukjmqu",
    "zihrsxagwcfpbsnsleydukzmqv",
    "zihrtxawwcfpbsnoleydzkjmuv",
    "dihrkxagwcfpbsfoleydukjmqv",
    "zihrtxaqwcfpbvnoleydukjmqt",
    "zihntxdgwcfpbsnogeydukjmqv",
    "zihrtxagwcdpxsnolxydukjmqv",
    "zihrtxagwcfpbsaoleydunjaqv",
    "zihrtyagwcfpbsnoleyduqjmqt",
    "zihrtxagwtfpbsnoleoyukjmqv",
    "zihrjiagwcfpbsnobeydukjmqv",
    "zihrtxqgwcfpbsnoleydykdmqv",
    "zihrhxmgwcfpbsnmleydukjmqv",
    "zihatxlgwcfpbsnoleydukpmqv",
    "zihrtxcgwcspbsnoleypukjmqv",
    "zihrtkagqcfpbsaoleydukjmqv",
    "ziqrtxagwcfabsnoleydukrmqv",
    "zihwtxagwifpbsnwleydukjmqv",
    "zitrtnagwcfpbsnoleddukjmqv",
    "wihrtxagwcfpbsioyeydukjmqv",
    "zihrtxagwclpystoleydukjmqv",
    "zihmtxagwcfpbsnolfydukjmlv",
    "zihrtxagechpbsnoleydutjmqv",
    "zihrtxagwcfebsnolnydukjmuv",
    "zihrtxagncmpbsnoleydukjmqs",
    "zihrvxagocfpbsnoleydukcmqv",
    "zihrtxagwcjcbsnolejdukjmqv",
    "wihrtxagwcfpbogoleydukjmqv",
    "kivrtxagwcfpgsnoleydukjmqv",
    "zihrtxagwafpbhnoleydukjcqv",
    "zihrtwagtcfpbsnolxydukjmqv",
    "vihrtxagwcfpbsneletdukjmqv",
    "zihlnxagwcfpbsnoleydukjmqb",
    "zihrtxagwcfpbsnoleydukjuuc",
    "zihrtxagwcfpbwntleadukjmqv",
    "fihrtxagwcfpbsnoleydvkjmqw",
    "zihrtxaowcfpbunoleyduljmqv",
    "zthrtxagwcfpbtnoleydukomqv",
    "xihltxagwcfpbsnoleydukjrqv",
    "ziyrnxagwcfpbsnoleydukjmhv",
    "zihrtxazwcfpbsnileyduejmqv",
    "zihrtxagwcfibsnoliydukjmsv",
    "zihrtxggwcfpbsnoleydugjmqj",
    "zrartxagwcffbsnoleydukjmqv",
    "zidrtxaqwcfpbsnoleyduksmqv",
    "zirrtxagwcypbsnoleydtkjmqv",
    "rihrtxagwcrpbsnoheydukjmqv",
    "zihrtxagwcfpbsnoleydpkjmzs",
    "zihrtxagbcfpbsnodbydukjmqv",
    "fihrtxaqwcfpbsnolaydukjmqv",
    "vihrtxbgwcfpbsnolemdukjmqv",
    "zihrtxapwcfubsnoleydukmmqv",
    "zihrtxagwcfpbgnolfydunjmqv",
    "zihrtxagwcypbsnokeyduvjmqv",
    "zihntxagwcfpbsnoieydukbmqv",
    "zihbtxagwkfpbsnolpydukjmqv",
    "zihrtxagwcfibsnoleydikjmqb",
    "jihrtxvgwcfpbsnoleydukjmqp",
    "zihrtxagwcfpbjnqleydukjmlv",
    "zibrtxagwcfpbzvoleydukjmqv",
    "zihrtxagwafgbsnbleydukjmqv",
    "zihjctagwcfpbsnoleydukjmqv",
    "zahrtxagwcepbsnoleddukjmqv",
    "zihetxagwcfpbsnoleydumjmsv",
    "zihrtvagwcfpbbnoleydukdmqv",
    "zbhrxxagwkfpbsnoleydukjmqv",
    "jfhrtxagwcftbsnoleydukjmqv",
    "yihrtxagwcfvbsnoleyduksmqv",
    "ziartxaewcfpbsnoleyduhjmqv",
    "zihrtxagwcfpbsnoozyduzjmqv",
    "cihotxagwcfpysnoleydukjmqv",
    "zihrtxagwcfpusnolwydxkjmqv",
    "zihrtxagwcfpbsnoleedmgjmqv",
    "zihrtxaghcfpmsnoleydukqmqv",
    "ziortxagwcfpbsboleidukjmqv",
    "zihrtxagwcfybsnoleyqxkjmqv",
    "zihrtxamwcfpbsngleydukjmqx",
    "zihrtxagwcfpbsnoleyduusmqu",
    "zihftxagwcfpssnwleydukjmqv",
    "zihrtxagwcfkbsnomeydukjmsv",
    "zihrtxagwcvpbsnooeydwkjmqv",
    "zihrtxagwcfpbsnoleycekumqv",
    "jahrtxagwcfpbsnoleydukjmmv",
    "zihrtxabwcfpbsnzheydukjmqv",
    "zihrtxagwctpbsnoleydwkjmhv",
    "zihrtpagwcfpbsnoleydzkjmqh",
    "zihwtxagwcfpbsnollydukjrqv",
    "zihrtxagwcfpusnoleydsvjmqv",
    "zibrtxagwcfpasnoleydukjmbv",
    "zchrtmagwcfpbsnoleydukjmwv",
    "ziertxbgwyfpbsnoleydukjmqv",
    "zitrtxagwcfpbhnoweydukjmqv",
    "zisrtxkgwcfpbsnopeydukjmqv",
    "zihrtxcgwdfpbynoleydukjmqv",
    "iihrtxajwcvpbsnoleydukjmqv",
    "zihuwxapwcfpbsnoleydukjmqv",
    "zihrtxngwcfqbsnoleyiukjmqv",
    "ziqrtxagjcfpbsnoleydukjmqi",
    "zifrtxarwctpbsnoleydukjmqv",
    "zihxgxagwcfpbpnoleydukjmqv",
    "giprtxagwcdpbsnoleydukjmqv",
    "zihrtxagwmfpbsnodeydukjbqv",
];

console.log(part1(input));
console.log(part2(input));