const _method = {
    goToDetail(propertyID) {
        this.$router.push( {name: 'propertyDetail', params: {id: propertyID}} );
    },
    goToOperation(type, propertyID) {
        if(type == 'return') {
            this.$router.push( { path: '/propertyReturn', params: {id: propertyID}} )
        }
        if(type == 'apply') {
            this.$router.push( { path: '/propertyApply', params: {id: propertyID}} )
        }
    }
}

export default {
    method: _method
}