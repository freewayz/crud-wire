/**
 * Created by peter on 8/27/15.
 */


/**
 * Create a LocalStorageCache Class
 * Used as a DB
 * Note in real application information should be
 * Stored in an Advance DB like SQL or NOSQLDB
 * But thanks to HTML5 LocalStorage API
 * @param nativeStorage
 * @param serializer
 * @constructor
 */
function LocalStorageCache(nativeStorage, serializer){

    this.storage = nativeStorage;
    this.serializer = serializer;
}

//create methods


LocalStorageCache.prototype={

    //method to clear the local storage
    clear : function () {
        this.storage.clear();
    },

    /**
     * get a specific value based on
     * the key or get the defaultvalue
     * @param key
     * @param defaultValue
     * @returns {*}
     */
    get : function (key, defaultValue) {

        var value = this.storage.getItem(key);

        if(value == null){
            //so let return a default value
            return ((typeof (defaultValue) != "undefined") ? defaultValue : null);
        }else{
            //get the real item
            return(
                this.serializer.parse(value)
            );
        }
    },
    
    get_all : function () {
        console.log("fetching result..........");
        var q_a = {
            q : '',
            a : ''
        };
        var array_list = [];
        for(var keys in this.storage){
            q_a.q = keys;
            q_a.a = this.get(keys);
            array_list.push(q_a)
        }

        return array_list;
    },
    /**
     * check if a key is in th localstorage
     * @param key
     */
    contains : function (key) {
        return(
            this.storage.getItem(key)
        );
    },
    /**
     * remove a particula value by it key
     * from the local storage
     * @param key
     */
    remove : function (key) {
        this.storage.removeItem(key);
    },

    /**
     * here we are using mongodb concept  to insert or upsert
     * @param key
     * @param value
     * @returns {LocalStorageCache}
     */
    insert: function (key, value) {
        this.storage.setItem(
            key, this.serializer.stringify(value)
        );
        //show the user that a new object is inserted
        console.log("Inserted => " + key + " :: " + value );
        //return this object reference for method chaining
        return (this);
    }
};

module.exports = LocalStorageCache;