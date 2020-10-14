import en from './en'
import zh from './zh'
const mapValue=function(lan){
    switch(lan){
        case 'en':
            return en;
        case 'zh':
        default:
            return zh
    }
}
export default function i18n(key,value){
    let lan=localStorage.getItem('language');
    lan=lan || zh
    return mapValue(lan)[key] || value
}