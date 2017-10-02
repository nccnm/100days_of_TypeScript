const name = {
    findName : {
        // "#{prefix} #{first_name} #{last_name}",
        // "#{first_name} #{last_name} #{suffix}",
        // "#{first_name} #{last_name}",
        // "#{first_name} #{last_name}",
        // "#{first_name} #{last_name}",
        // "#{first_name} #{last_name}"
        formats: [
            "<%= prefix %> <%= firstName %> <%= lastName %>",
            "<%= firstName %> <%= lastName %> <%= suffix %>",
            "<%= firstName %> <%= lastName %>"
        ]
    }
};

export default name;