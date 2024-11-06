import { toast } from 'vue3-toastify';

export default {
    config: {
        theme: 'colored'
    },
    info: function(m){
        toast.info(m, this.config);
    },
    success: function(m){
        toast.success(m, this.config);
    },
    warning: function(m){
        toast.warning(m, this.config);
    },
    error: function(m){
        toast.error(m, this.config);
    },
    danger: function(m){
        this.error(m);
    }
}