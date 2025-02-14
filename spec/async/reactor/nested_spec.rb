# frozen_string_literal: true

# Released under the MIT License.
# Copyright, 2017-2022, by Samuel Williams.

RSpec.describe Async::Reactor do
	describe '::run (in existing reactor)' do
		include_context Async::RSpec::Reactor
		
		it "should nest reactor" do
			outer_reactor = Async::Task.current.reactor
			inner_reactor = nil
			
			described_class.run do |task|
				inner_reactor = task.reactor
			end
			
			expect(outer_reactor).to be_kind_of(described_class)
			expect(outer_reactor).to be_eql(inner_reactor)
		end
	end
	
	describe '::run' do
		it "should nest reactor" do
			expect(Async::Task.current?).to be_nil
			inner_reactor = nil
			
			described_class.run do |task|
				inner_reactor = task.reactor
			end
			
			expect(inner_reactor).to be_kind_of(described_class)
		end
	end
end
