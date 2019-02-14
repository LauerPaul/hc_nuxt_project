const timestamp = {
	get: () => { return Math.floor(new Date() / 1000) },
	validate: (time=0, duration=0) => {
		if (!time || !duration) return true
		let current = timestamp.get()

		if (current > (time + duration)) return true
		else return false
	}
}

export default timestamp