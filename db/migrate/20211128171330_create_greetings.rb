# frozen_string_literal: true

# Here is the database and greetings changes that I want in the schema
class CreateGreetings < ActiveRecord::Migration[6.1]
  def change
    create_table :greetings do |t|
      t.string :greeting

      t.timestamps
    end
  end
end
