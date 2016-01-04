function ramp (num) {
    for(i=1;i<num.length;i++) {
        if (num.charAt(i) < num.charAt(i-1)) {
            return false;
        }
    }
    return true;
}
