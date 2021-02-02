const mongoose = require('mongoose');

const PlanetDataSchema = mongoose.Schema({
    pl_hostname : {
        type : String,
        required: true
    },
    pl_letter : {
        type : String,
        required: true
    },
    pl_name : {
        type : String,
        required: true
    },
    pl_discmethod : {
        type : String,
        required: true
    },
    pl_controvflag : {
        type : Number,
        required: true
    },
    pl_pnum : {
        type : Number,
        required: true
    },
    pl_orbper : {
        type : Number,
        required: false
    },
    pl_orbpererr1 : {
        type : Number,
        required: false
    },
    pl_orbpererr2 : {
        type : Number,
        required: false
    },
    pl_orbperlim : {
        type : Number,
        required: false
    },
    pl_orbpern : {
        type : Number,
        required: false
    },
    pl_orbsmax : {
        type : Number,
        required: false
    },
    pl_orbsmaxerr1 : {
        type : Number,
        required: false
    },
    pl_orbsmaxerr2 : {
        type : Number,
        required: false
    },
    pl_orbsmaxlim : {
        type : Number,
        required: false
    },
    pl_orbsmaxn : {
        type : Number,
        required: false
    },
    pl_orbeccen : {
        type : Number,
        required: false
    },
    pl_orbeccenerr1 : {
        type : Number,
        required: false
    },
    pl_orbeccenerr2 : {
        type : Number,
        required: false
    },
    pl_orbeccenlim : {
        type : Number,
        required: false
    },
    pl_orbeccenn : {
        type : Number,
        required: false
    },
    pl_orbincl : {
        type : Number,
        required: false
    },
    pl_orbinclerr1 : {
        type : Number,
        required: false
    },
    pl_orbinclerr2 : {
        type : Number,
        required: false
    },
    pl_orbincllim : {
        type : Number,
        required: false
    },
    pl_orbincln : {
        type : Number,
        required: false
    },
    pl_bmassj : {
        type : Number,
        required: false
    },
    pl_bmassjerr1 : {
        type : Number,
        required: false
    },
    pl_bmassjerr2 : {
        type : Number,
        required: false
    },
    pl_bmassjlim : {
        type : Number,
        required: false
    },
    pl_bmassn : {
        type : Number,
        required: false
    },
    pl_bmassprov : {
        type : String,
        required: false
    },
    pl_radj : {
        type : Number,
        required: false
    },
    pl_radjerr1 : {
        type : Number,
        required: false
    },
    pl_radjerr2 : {
        type : Number,
        required: false
    },
    pl_radjlim : {
        type : Number,
        required: false
    },
    pl_radn : {
        type : Number,
        required: false
    },
    pl_dens : {
        type : Number,
        required: false
    },
    pl_denserr1 : {
        type : Number,
        required: false
    },
    pl_denserr2 : {
        type : Number,
        required: false
    },
    pl_denslim : {
        type : Number,
        required: false
    },
    pl_densn : {
        type : Number,
        required: false
    },
    pl_ttvflag : {
        type : Number,
        required: false
    },
    pl_kepflag : {
        type : Number,
        required: false
    },
    pl_k2flag : {
        type : Number,
        required: false
    },
    ra_str : {
        type : String,
        required: false
    },
    dec_str : {
        type : String,
        required: false
    },
    ra : {
        type : Number,
        required: false
    },
    st_raerr : {
        type : Number,
        required: false
    },
    dec : {
        type : Number,
        required: false
    },
    st_decerr : {
        type : Number,
        required: false
    },
    st_posn : {
        type : Number,
        required: false
    },
    st_dist : {
        type : Number,
        required: false
    },
    st_disterr1 : {
        type : Number,
        required: false
    },
    st_disterr2 : {
        type : Number,
        required: false
    },
    st_distlim : {
        type : Number,
        required: false
    },
    st_distn : {
        type : Number,
        required: false
    },
    st_optmag : {
        type : Number,
        required: false
    },
    st_optmagerr : {
        type : Number,
        required: false
    },
    st_optmaglim : {
        type : Number,
        required: false
    },
    st_optband : {
        type : String,
        required: false
    },
    gaia_gmag : {
        type : Number,
        required: false
    },
    gaia_gmagerr : {
        type : Number,
        required: false
    },
    gaia_gmaglim : {
        type : Number,
        required: false
    },
    st_teff : {
        type : Number,
        required: false
    },
    st_tefferr1 : {
        type : Number,
        required: false
    },
    st_tefferr2 : {
        type : Number,
        required: false
    },
    st_tefflim : {
        type : Number,
        required: false
    },
    st_teffn : {
        type : Number,
        required: false
    },
    st_mass : {
        type : Number,
        required: false
    },
    st_masserr1 : {
        type : Number,
        required: false
    },
    st_masserr2 : {
        type : Number,
        required: false
    },
    st_masslim : {
        type : Number,
        required: false
    },
    st_massn : {
        type : Number,
        required: false
    },
    st_rad : {
        type : Number,
        required: false
    },
    st_raderr1 : {
        type : Number,
        required: false
    },
    st_raderr2 : {
        type : Number,
        required: false
    },
    st_radlim : {
        type : Number,
        required: false
    },
    st_radn : {
        type : Number,
        required: false
    },
    pl_nnotes : {
        type : Number,
        required: false
    },
    rowupdate : {
        type : Date,
        required: true
    },
    pl_facility : {
        type : String,
        required: true
    }
});

const PlanetData = module.exports = mongoose.model('planetdata', PlanetDataSchema);

module.exports.getPlanetData = function(callback, limit){
    PlanetData.find(callback).limit(limit);
}