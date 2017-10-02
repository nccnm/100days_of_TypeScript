const address = {
    city: {
        // "#{city_prefix} #{Name.first_name}#{city_suffix}",
        // "#{city_prefix} #{Name.first_name}",
        // "#{Name.first_name}#{city_suffix}",
        // "#{Name.last_name}#{city_suffix}"
        formats: [
            "<%= cityPrefix %> <%= name.firstName %> <%= citySuffix %>",
            "<%= cityPrefix %> <%= name.firstName %>",
            "<%= name.firstName %> <%= citySuffix %>",
            "<%= name.lastName %><%= citySuffix %>",
        ]
    }
};

export default address;