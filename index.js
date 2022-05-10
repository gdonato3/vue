new Vue({
    el: '#app',
    data: {
        items: ''
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            var self = this;
            $.get("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", function(d) {
                self.items = d;
            })
            .then(function(res){

                var options = {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Super Heroes Age Chart'
                    },
                    xAxis: {
                        categories: ['Age']
                    },
                    yAxis: {
                        title: {
                            text: 'Eternal Flame wont be displayed as he is too old.'
                        }
                    },
                    series: []
                }
                
                for (i = 0; i < res.members.length - 1; i++) {
                    options.series.push ({
                        name: res.members[i].name,
                        data: [res.members[i].age]
                    });
                    
                }

                var myChart = Highcharts.chart('container', options);
            });

        },
        formatArray: function (array) {
            var newArray = array.join(', ');
            return newArray;
        }
    }
})