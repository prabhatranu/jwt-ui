export default class Validator {
    
    static isValid(value){
        return value?true:false;
    }

    static isEmail(email) {
        if(email.length>100) return
        if(!email) return false;
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(mailformat);
    }

    static isEmpty(obj) {
        if(obj == null || obj == undefined) return true;
        let keys = Object.keys(obj);
        if(keys.length === 0) return true;
        for (const key of keys) {
            if(obj[key]) return false;
        }
        return true;
    }

    static isAnyEmpty(obj, keys) {
        if(!obj) return true;
        for (const key of keys) {
            if(!obj[key]) return true;
        }
        return false;
    }

    static isName(name) {
        if(!name) return false;
        let nameFormat = /^[a-zA-Z .]{0,100}$/;
        return name.match(nameFormat);
    }

    static isPhone(phone) {
        if(!phone) return false;
        let phoneFormat = /^[0-9 +-]{0,12}$/;
        return phone.match(phoneFormat);
    }

    //Custom validators for client register page -- Start

    static isClientName(obj) {
        if(!obj) return false;
        let nameFormat = /^[a-zA-Z .]{0,100}$/;
        return obj.match(nameFormat);
    }

    static isWebsite(obj) {
        if(!obj) return false;
        let webisteFormat = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,100}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        return obj.match(webisteFormat);
    }

    static iscompanyName(obj) {
        if(!obj) return false;
        let regexExp = /^[a-zA-Z0-9 !@#$%\^&*)(+=._-]{0,100}$/
        return obj.match(regexExp);
    }

    static isAddress(obj) {
        if(!obj) return false;
        let addressFormat =  /^[a-zA-Z0-9 ,k!@#$%^&*\/\\\n\t)(+=._-]{0,200}$/;
        return obj.match(addressFormat);
    }
    static isRemarks(obj) {
        if(!obj) return false;
        let remarksFormat =  /^[a-zA-Z0-9 ,k!@#$%^&*\/\\)(+=._-]{0,80}$/;
        return obj.match(remarksFormat);
    }
    static isPostalCode(obj) {
        if(!obj) return false;
        let postalCodeFormat = /^[a-z0-9A-Z]{0,6}$/;
        return obj.match(postalCodeFormat);
    }

    static isCity(obj) {
        if(!obj) return false;
        let cityFormat = /^[a-zA-Z ]{0,20}$/;
        return obj.match(cityFormat);
    }

    static isCountry(obj) {
        if(!obj) return false;
        let countryFormat = /^[a-zA-Z ]{0,50}$/;
        return obj.match(countryFormat);
    }



}